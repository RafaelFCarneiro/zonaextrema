class Indexer {

    findProcessor( log ) {

        this.log = log;
        var className = this.log.kind.description;

        return new Processors[className](log);

    }

    createTags(log) {

        var processor = this.findProcessor( log );

        log.description.split(" ").forEach( tag => processor.execute(tag) );

        log["tags"] = processor.getTags();

        return log;
    }

};