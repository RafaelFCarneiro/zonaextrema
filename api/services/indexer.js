//import * as Processors from "processors";

class Indexer {

    findProcessor( log ) {

        this.log = log;
        let className = this.log.kind.description;

        return new Processors[className](log);

    }

    createTags(log) {

        let processor = this.findProcessor( log );

        log.description.split(" ").forEach( tag => processor.execute(tag) );

        log["tags"] = processor.getTags();

        return log;
    }

};