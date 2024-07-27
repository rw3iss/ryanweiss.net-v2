// var play = require('./play/play.json');
// var freelance = require('./work/freelance.json');
// var fulltime = require('./work/fulltime.json');
// var skills = require('./skills/skills.json');
// var repositories = require('./work/repositories.json');

const play = { items: [] };
const freelance = { items: [] };
const fulltime = { items: [] };
const skills = { items: [] };
const repositories = { items: [] };

// This is a "flat file" database (ie. JSON manager).
// It just reads in JSON files and gives accessors to the data (read-only).

function db() {
    this.init = function() {
    }

    // general "search all"
    this.getItem = function(key) {
        for (item of freelance.items) {
            if (item.key == key) {
                return item;
            }
        }

        for (item of play.items) {
            if (item.key == key) {
                return item;
            }
        }

        for (item of fulltime.items) {
            if (item.key == key) {
                return item;
            }
        }

        for (item of repositories.items) {
            if (item.key == key) {
                return item;
            }
        }
    }

    // concatenates all json work/play and sorts items by date
    this.getLatest = function() {
        var items = _combineItems(freelance, play);
        //items = _combineItems(items, play);

        // truncate to most recent 12 items
        items = items.slice(0, 12);

        //items = _sortItems(items, 'date_updated');

        return items;
    }

    this.getFreelance = function(sortBy) {
        return freelance.items;
    }

    this.getFulltime = function(sortBy) {
        return fulltime.items;
    }

    this.getPlay = function(sortBy) {
        return play.items;
    }

    this.getSkills = function() {
        return skills;
    }

    this.getRepositories = function(sortBy) {
        return repositories.items;
    }

    this.search = function(string) {
        return null;
    }
}


// Helper functions

function _sortItems(items, sortBy) {
    // returns a sorted array of items
    items.sort(function(a, b) {

    });

    return items;
}

// Combines items into a single array, but adds a 'category' property to the
// items based on their parent category (ie. work or play)
// Todo: take an arbitrary number of cat arguments and combine them
function _combineItems(catA, catB) {
    var result = [];

    for (var i = 0; i < catA.items.length; i++) {
        var item = catA.items[i];
        item.category = catA.category;
        result.push(item);
    }

    for (var i = 0; i < catB.items.length; i++) {
        var item = catB.items[i];
        item.category = catB.category;
        result.push(item);
    }

    return result;
}

export default new db();