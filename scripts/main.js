const _0x394b95 = _0x504f;
(function (_0x38f034, _0x5b73aa) {
    const _0x53cf13 = _0x504f, _0x586676 = _0x38f034();
    while (!![]) {
        try {
            const _0x159243 = -parseInt(_0x53cf13(0x157)) / 0x1 + -parseInt(_0x53cf13(0x176)) / 0x2 * (-parseInt(_0x53cf13(0x178)) / 0x3) + -parseInt(_0x53cf13(0x17f)) / 0x4 + parseInt(_0x53cf13(0x173)) / 0x5 + -parseInt(_0x53cf13(0x164)) / 0x6 + parseInt(_0x53cf13(0x174)) / 0x7 + parseInt(_0x53cf13(0x162)) / 0x8;
            if (_0x159243 === _0x5b73aa)
                break;
            else
                _0x586676['push'](_0x586676['shift']());
        } catch (_0x14694f) {
            _0x586676['push'](_0x586676['shift']());
        }
    }
}(_0x99d8, 0x216c8));
const playButton = document[_0x394b95(0x159)](_0x394b95(0x182)), gameInfoDiv = document['getElementById'](_0x394b95(0x168)), gameInfo = document[_0x394b95(0x159)](_0x394b95(0x16b));
gameInfo['textContent'] = null, playButton[_0x394b95(0x183)] = () => {
    const _0x47ae0e = _0x394b95, _0x3e21de = [
            _0x47ae0e(0x177),
            'fire',
            _0x47ae0e(0x16d),
            _0x47ae0e(0x169),
            _0x47ae0e(0x15b),
            'tree',
            _0x47ae0e(0x15e),
            _0x47ae0e(0x170),
            _0x47ae0e(0x166),
            _0x47ae0e(0x158),
            _0x47ae0e(0x16f),
            _0x47ae0e(0x180),
            'devil',
            _0x47ae0e(0x167),
            _0x47ae0e(0x15c)
        ];
    let _0x39f028 = null, _0x317610 = -0x1;
    do {
        _0x39f028 = document[_0x47ae0e(0x159)](_0x47ae0e(0x179))[_0x47ae0e(0x16c)]['toLowerCase'](), _0x317610 = _0x3e21de[_0x47ae0e(0x16a)](_0x39f028);
        if (_0x317610 < 0x0)
            return gameInfo[_0x47ae0e(0x15f)] = _0x47ae0e(0x17e);
        ;
    } while (_0x317610 < 0x0);
    const _0x3b1bae = _0x52b404(_0x3e21de), _0x5d08c1 = _0x3e21de['indexOf'](_0x3b1bae);
    gameInfo[_0x47ae0e(0x15f)] = _0x47ae0e(0x165) + _0x39f028 + '.', _0x317610 + 0x1;
    function _0x5cc887() {
        const _0x356bc8 = _0x47ae0e;
        gameInfo[_0x356bc8(0x15f)] = _0x356bc8(0x172) + _0x3b1bae + '.', _0x5d08c1 + 0x1;
    }
    ;
    setTimeout(_0x5cc887, 0x7d0), _0x20c3b9();
    function _0x14556a() {
        const _0x467bd6 = _0x47ae0e, _0x952e4c = _0x5d08c1 > _0x317610 && _0x5d08c1 <= _0x317610 + 0x7, _0x4ddfaa = _0x952e4c || _0x5d08c1 <= _0x317610 - 0x8, _0x713e7a = _0x317610 <= 0x7 ? _0x952e4c : _0x4ddfaa;
        gameInfo[_0x467bd6(0x15f)] = _0x713e7a ? 'You\x20win!' : _0x467bd6(0x15a);
    }
    ;
    function _0x537eb7() {
        const _0x484ffc = _0x47ae0e;
        gameInfo['innerHTML'] = _0x484ffc(0x17c);
    }
    function _0x20c3b9() {
        if (_0x317610 == _0x5d08c1)
            return setTimeout(_0x537eb7, 0xfa0);
        ;
        setTimeout(_0x14556a, 0xfa0);
    }
    ;
    function _0x52b404(_0x1780c9) {
        const _0x4e418f = _0x47ae0e;
        return _0x1780c9[Math[_0x4e418f(0x163)](Math[_0x4e418f(0x16e)]() * _0x1780c9['length'])];
    }
    ;
};
const helpButton = document[_0x394b95(0x159)]('helpButton'), helpDiv = document[_0x394b95(0x159)]('helpDiv');
helpDiv[_0x394b95(0x17b)]['display'] = _0x394b95(0x175), helpButton[_0x394b95(0x183)] = () => {
    const _0x5e61e5 = _0x394b95;
    helpDiv[_0x5e61e5(0x17b)][_0x5e61e5(0x15d)] == _0x5e61e5(0x175) ? (helpDiv[_0x5e61e5(0x17b)]['display'] = _0x5e61e5(0x161), helpButton[_0x5e61e5(0x181)] = 'Hide\x20Help\x20Menu') : (helpDiv[_0x5e61e5(0x17b)][_0x5e61e5(0x15d)] = _0x5e61e5(0x175), helpButton[_0x5e61e5(0x181)] = 'Show\x20Help\x20Menu');
    ;
};
function _0x504f(_0x3151b2, _0x4911b1) {
    const _0x99d889 = _0x99d8();
    return _0x504f = function (_0x504f27, _0x55c30c) {
        _0x504f27 = _0x504f27 - 0x157;
        let _0xd54b6f = _0x99d889[_0x504f27];
        return _0xd54b6f;
    }, _0x504f(_0x3151b2, _0x4911b1);
}
const creditButton = document[_0x394b95(0x159)](_0x394b95(0x171)), creditDiv = document[_0x394b95(0x159)](_0x394b95(0x160));
creditDiv['style']['display'] = _0x394b95(0x175), creditButton[_0x394b95(0x183)] = () => {
    const _0x47fb7f = _0x394b95;
    creditDiv[_0x47fb7f(0x17b)]['display'] == _0x47fb7f(0x175) ? (creditDiv[_0x47fb7f(0x17b)][_0x47fb7f(0x15d)] = 'block', creditButton['textContent'] = _0x47fb7f(0x17a)) : (creditDiv[_0x47fb7f(0x17b)][_0x47fb7f(0x15d)] = 'none', creditButton['textContent'] = _0x47fb7f(0x17d));
    ;
};
function _0x99d8() {
    const _0x3c17a9 = [
        'lightning',
        'gameInfoDiv',
        'snake',
        'indexOf',
        'gameInfo',
        'value',
        'scissors',
        'random',
        'water',
        'sponge',
        'creditButton',
        'Your\x20opponent\x20chose\x20',
        '745295ecbAkn',
        '888195gPBbOC',
        'none',
        '40432TRgBgI',
        'rock',
        '21mPmEjw',
        'userChoice',
        'Hide\x20Credit',
        'style',
        'Tie\x20game!',
        'Show\x20Credit',
        'Invalid\x20choice!',
        '887756bkOBtW',
        'dragon',
        'textContent',
        'playButton',
        'onclick',
        '207158ggVjJn',
        'air',
        'getElementById',
        'You\x20lose!',
        'human',
        'gun',
        'display',
        'wolf',
        'innerHTML',
        'creditDiv',
        'block',
        '2434592BncPFz',
        'floor',
        '934674NqRRiI',
        'You\x20chose\x20',
        'paper'
    ];
    _0x99d8 = function () {
        return _0x3c17a9;
    };
    return _0x99d8();
}
