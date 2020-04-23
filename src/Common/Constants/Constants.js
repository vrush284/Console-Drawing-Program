

module.exports  = {
    QUESTION: {
        type: "input",
        name: "command",
        message : "enter command",
    },
    REGULAR_EXPRESSIONS: {
        DRAW_CANVAS: /^C (\d+?) (\d+?)$/,
        DRAW_RECTANGLE: /^R (\d+?) (\d+?) (\d+?) (\d+?)$/,
        DRAW_LINE: /^L (\d+?) (\d+?) (\d+?) (\d+?)$/,
        FILL_CANVAS: /^B (\d+?) (\d+?) ([a-zA-z])$/,
        QUIT: /^Q$/
    },
    DRAW_COMMANDS: {
        DRAW_CANVAS: 'DRAW_CANVAS',
        DRAW_LINE: 'DRAW_LINE',
        DRAW_RECTANGLE: 'DRAW_RECTANGLE',
        FILL_CANVAS: 'FILL_CANVAS',
        QUIT: 'QUIT',
        INVALID_COMMAND: 'INVALID_COMMAND',
    },
    DRAW_SYMBOLS: {
        HORIZONTAL_BORDER_VALUE: '-',
        VERTICAL_BORDER_VALUE: '|',
        INITIAL_FILL_VALUE: ' ',
        DEFAULT_DRAW_VALUE: 'X'    
    },
    ERROR_MESSAGES: {
        INVALID_INPUT: "Please enter valid input command !!!",
        NO_CANVAS: "Sorry, no canvas found please draw a canvas first."
    }
}