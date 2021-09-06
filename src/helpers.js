class foodHelpers {
    static remove(items, item) {
        items.pop(item)
        return items
    }

    static random(items) {
        let randomIndex = Math.floor(Math.random() * items.length)
        return items[randomIndex];
    }
}

module.exports = foodHelpers