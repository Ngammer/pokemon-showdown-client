"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattleSceneStub = void 0;
class BattleSceneStub {
    animating = false;
    acceleration = NaN;
    gen = NaN;
    activeCount = NaN;
    numericId = NaN;
    timeOffset = NaN;
    interruptionCount = NaN;
    messagebarOpen = false;
    log = { add: (args, kwargs) => { } };
    $frame;
    abilityActivateAnim(pokemon, result) { }
    addPokemonSprite(pokemon) { return null; }
    addSideCondition(siden, id, instant) { }
    animationOff() { }
    animationOn() { }
    maybeCloseMessagebar(args, kwArgs) { return false; }
    closeMessagebar() { return false; }
    damageAnim(pokemon, damage) { }
    destroy() { }
    finishAnimations() { return void (0); }
    healAnim(pokemon, damage) { }
    hideJoinButtons() { }
    incrementTurn() { }
    updateAcceleration() { }
    message(message, hiddenMessage) { }
    pause() { }
    setMute(muted) { }
    preemptCatchup() { }
    removeSideCondition(siden, id) { }
    reset() { }
    resetBgm() { }
    updateBgm() { }
    resultAnim(pokemon, result, type) { }
    typeAnim(pokemon, types) { }
    resume() { }
    runMoveAnim(moveid, participants) { }
    runOtherAnim(moveid, participants) { }
    runPrepareAnim(moveid, attacker, defender) { }
    runResidualAnim(moveid, pokemon) { }
    runStatusAnim(moveid, participants) { }
    startAnimations() { }
    teamPreview() { }
    resetSides() { }
    updateGen() { }
    updateSidebar(side) { }
    updateSidebars() { }
    updateStatbars() { }
    updateWeather(instant) { }
    upkeepWeather() { }
    wait(time) { }
    setFrameHTML(html) { }
    setControlsHTML(html) { }
    removeEffect(pokemon, id, instant) { }
    addEffect(pokemon, id, instant) { }
    animSummon(pokemon, slot, instant) { }
    animUnsummon(pokemon, instant) { }
    animDragIn(pokemon, slot) { }
    animDragOut(pokemon) { }
    resetStatbar(pokemon, startHidden) { }
    updateStatbar(pokemon, updatePrevhp, updateHp) { }
    updateStatbarIfExists(pokemon, updatePrevhp, updateHp) { }
    animTransform(pokemon, useSpeciesAnim, isPermanent) { }
    clearEffects(pokemon) { }
    removeTransform(pokemon) { }
    animFaint(pokemon) { }
    animReset(pokemon) { }
    anim(pokemon, end, transition) { }
    beforeMove(pokemon) { }
    afterMove(pokemon) { }
}
exports.BattleSceneStub = BattleSceneStub;
if (typeof require === 'function') {
    // in Node
    global.BattleSceneStub = BattleSceneStub;
}
