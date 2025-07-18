const path = require('path');

module.exports = {
    activate(ghost) {
        ghost.helperService.registerDir(
            path.resolve(__dirname, 'lib/helpers')
        );
    }
};