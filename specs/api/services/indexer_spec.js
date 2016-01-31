describe("Indexer", function(){

    describe("#createTags", function(){

        beforeEach(function(){
            this.log = {
                id: 10000,
                logged_at: new Date,
                description: '#avocado 240g',
                kind: {
                    id: 2,
                    description: "EAT"
                }
            };
            this.indexer = new Indexer();
            this.definition = {

            };
        });

        it(`Dado que eu tenha um Log ${this.log}
             quando executar o metodo
             Então eu deverei receber ${this.definition}`, function(){
            expect( this.indexer.createTags() ).toEqual( this.definition );
        });

    });

});