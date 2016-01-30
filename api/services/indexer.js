class Indexer {

    createTags(log) {

        let processor = Biohacking.Processors.find( log );

        log.description.split(" ").forEach( tag => processor.execute(tag) );

        log["tags"] = processor.getTags();

        return log;
    }

};