class TreiNode {
    constructor(){
        this.children = new Map();
        this.weight = 0;
        this.NoOfChildren = 0;
    }
}

class Trie {
    constructor(){
        this.root = new TreiNode();
    }
    insert(word, w){	
		let curr = this.root;
		for(let i = 0; i < word.length; i++){
            let ch = word[i];
            if(!curr.children.has(ch)){
                curr.children.set(ch, new TreiNode());
                curr.NoOfChildren += 1;
            }
            curr = curr.children.get(ch);
		}
        curr.weight = w;
    }

	 search(word) {
		let curr = this.root;
        let ans = [];
		for(let i = 0; i < word.length; i++){
			let ch = word[i];
            if(curr.children.get(ch).count >= 2){
                ans+=ch;
            }
            if(curr.children.get(ch).count == 1){
                ans+=ch;
                break;

            }
            curr = curr.children.get(ch);
        }
       return ans;
	 }
}

let A = ["abcd", "aecd", "abaa", "abef", "acdcc", "acbcc"];
let wt = [ 2, 1, 3, 4, 6, 5];
let B = ["ab", "abc", "a"];

function main() {
    let obj = new Trie();
    for(let i = 0; i < A.length; i++){
        obj.insert(A[i], wt[i]);
    }
   console.log(obj.root.children.get("a").children.get("b"));
}
main(A, B);

