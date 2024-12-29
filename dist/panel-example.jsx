"use strict";
/**
 * Example Panel
 *
 * Just an example panel for creating new panels/popups
 *
 * @author Guangcong Luo <guangcongluo@gmail.com>
 * @license AGPLv3
 */
// Example room with panel
class ExampleRoom extends PSRoom {
    classType = 'example';
    constructor(options) {
        super(options);
    }
}
class ExamplePanel extends PSRoomPanel {
    render() {
        const room = this.props.room;
        return <PSPanelWrapper room={room}>
			<div class="mainmessage"><p>Loading...</p></div>
		</PSPanelWrapper>;
    }
}
PS.roomTypes['example'] = {
    Model: ExampleRoom,
    Component: ExamplePanel,
};
// Example panel with no room
class ExampleViewPanel extends PSRoomPanel {
    render() {
        const room = this.props.room;
        return <PSPanelWrapper room={room}>
			<div class="mainmessage"><p>Loading...</p></div>
		</PSPanelWrapper>;
    }
}
PS.roomTypes['exampleview'] = {
    Component: ExampleViewPanel,
};
