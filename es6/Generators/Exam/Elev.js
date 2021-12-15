function buildWordTreeFromSentences(sentenceList){
    let root={}
    sentenceList.forEach((sentence)=>{
        let base=root;
        sentence.split('').forEach(word=>{
            if(base[word]=== undefined){
                base[word]={}
            }
            base=base[word]
        })

    })
    return root;
}
let tree=buildWordTreeFromSentences(['Hello world','Hello there'])
console.log(tree)