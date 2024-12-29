"use strict";
/**
 * Ladder Panel
 *
 * Panel for ladder formats and associated ladder tables.
 *
 * @author Adam Tran <aviettran@gmail.com>
 * @license MIT
 */
class LadderRoom extends PSRoom {
    classType = 'ladder';
    format = this.id.split('-')[1];
    notice;
    searchValue = '';
    lastSearch = '';
    loading = false;
    error;
    ladderData;
    setNotice = (notice) => {
        this.notice = notice;
        this.update(null);
    };
    setSearchValue = (searchValue) => {
        this.searchValue = searchValue;
        this.update(null);
    };
    setLastSearch = (lastSearch) => {
        this.lastSearch = lastSearch;
        this.update(null);
    };
    setLoading = (loading) => {
        this.loading = loading;
        this.update(null);
    };
    setError = (error) => {
        this.loading = false;
        this.error = error.message;
        this.update(null);
    };
    setLadderData = (ladderData) => {
        this.loading = false;
        this.ladderData = ladderData;
        this.update(null);
    };
    requestLadderData = (searchValue) => {
        const { teams } = PS;
        if (teams.usesLocalLadder) {
            this.send(`/cmd laddertop ${this.format} ${toID(this.searchValue)}`);
        }
        else if (this.format !== undefined) {
            Net('/ladder.php')
                .get({
                query: {
                    format: this.format,
                    server: PS.server.id,
                    output: 'html',
                    prefix: toID(searchValue),
                },
            })
                .then(this.setLadderData)
                .catch(this.setError);
        }
        this.setLoading(true);
    };
}
function LadderFormat(props) {
    const { room } = props;
    const { format, searchValue, lastSearch, loading, error, ladderData, setSearchValue, setLastSearch, requestLadderData, } = room;
    if (format === undefined)
        return null;
    const changeSearch = (e) => {
        setSearchValue(e.currentTarget.value);
    };
    const submitSearch = (e) => {
        e.preventDefault();
        setLastSearch(room.searchValue);
        requestLadderData(room.searchValue);
    };
    const RenderHeader = () => {
        if (!PS.teams.usesLocalLadder) {
            return <h3>
				{BattleLog.escapeFormat(format)} Top{" "}
				{BattleLog.escapeHTML(lastSearch ? `- '${lastSearch}'` : "500")}
			</h3>;
        }
        return null;
    };
    const RenderSearch = () => {
        if (!PS.teams.usesLocalLadder) {
            return <form class="search" onSubmit={submitSearch}>
				<input type="text" name="searchValue" class="textbox searchinput" value={BattleLog.escapeHTML(searchValue)} placeholder="username prefix" onChange={changeSearch}/>
				<button type="submit"> Search</button>
			</form>;
        }
        return null;
    };
    const RenderFormat = () => {
        if (loading || !BattleFormats) {
            return <p>Loading...</p>;
        }
        else if (error !== undefined) {
            return <p>Error: {error}</p>;
        }
        else if (BattleFormats[format] === undefined) {
            return <p>Format {format} not found.</p>;
        }
        else if (ladderData === undefined) {
            return null;
        }
        return <>
			<p>
				<button class="button" data-href="ladder" data-target="replace">
					<i class="fa fa-refresh"></i> Refresh
				</button>
				<RenderSearch />
			</p>
			<RenderHeader />
			<SanitizedHTML>{ladderData}</SanitizedHTML>
		</>;
    };
    return <div class="ladder pad">
		<p>
		<button class="button" data-href="ladder" data-target="replace">
				<i class="fa fa-chevron-left"></i> Format List
			</button>
		</p>
		<RenderFormat />
	</div>;
}
class LadderPanel extends PSRoomPanel {
    componentDidMount() {
        const { room } = this.props;
        // Request ladder data either on mount or after BattleFormats are loaded
        if (BattleFormats && room.format !== undefined)
            room.requestLadderData();
        this.subscriptions.push(room.subscribe((response) => {
            if (response) {
                const [format, ladderData] = response;
                if (room.format === format) {
                    if (!ladderData) {
                        room.setError(new Error('No data returned from server.'));
                    }
                    else {
                        room.setLadderData(ladderData);
                    }
                }
            }
            this.forceUpdate();
        }));
        this.subscriptions.push(PS.teams.subscribe(() => {
            if (room.format !== undefined)
                room.requestLadderData();
            this.forceUpdate();
        }));
    }
    static Notice = (props) => {
        const { notice } = props;
        if (notice) {
            return (<p>
					<strong style="color:red">{notice}</strong>
				</p>);
        }
        return null;
    };
    static BattleFormatList = () => {
        if (!BattleFormats) {
            return <p>Loading...</p>;
        }
        let currentSection = "";
        let sections = [];
        let formats = [];
        for (const [key, format] of Object.entries(BattleFormats)) {
            if (!format.rated || !format.searchShow)
                continue;
            if (format.section !== currentSection) {
                if (formats.length > 0) {
                    sections.push(<preact.Fragment key={currentSection}>
						<h3>{currentSection}</h3>
						<ul style="list-style:none;margin:0;padding:0">
							{formats}
						</ul>
					</preact.Fragment>);
                    formats = [];
                }
                currentSection = format.section;
            }
            formats.push(<li key={key} style="margin:5px">
					<button name="joinRoom" value={`ladder-${key}`} class="button" style="width:320px;height:30px;text-align:left;font:12pt Verdana">
						{BattleLog.escapeFormat(format.id)}
					</button>
				</li>);
        }
        return <>{sections}</>;
    };
    static ShowFormatList = (props) => {
        const { room } = props;
        return <>
			<p>
				<a class="button" href={`/${Config.routes.users}/`} target="_blank">
					Look up a specific user's rating
				</a>
			</p>
			<LadderPanel.Notice notice={room.notice}/>
			<p>
				<button name="joinRoom" value="view-ladderhelp" class="button">
					<i class="fa fa-info-circle"></i> How the ladder works
				</button>
			</p>
			<LadderPanel.BattleFormatList />
		</>;
    };
    render() {
        const { room } = this.props;
        return <PSPanelWrapper room={room} scrollable>
			<div class="ladder pad">
				{room.format === undefined && (<LadderPanel.ShowFormatList room={room}/>)}
				{room.format !== undefined && <LadderFormat room={room}/>}
			</div>
		</PSPanelWrapper>;
    }
}
PS.roomTypes['ladder'] = {
    Model: LadderRoom,
    Component: LadderPanel,
};
PS.updateRoomTypes();
