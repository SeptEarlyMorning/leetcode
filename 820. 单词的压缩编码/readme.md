# 820. 单词的压缩编码

## 思路

  1. 题目中需要求的`最小字符串长度`，而没有要求求出`索引字符串`和`索引列表`。  
  所以此时我们可以想想有没有不用得到`索引字符串`和`索引列表`就可以求出`最小字符串长度`的方法。
  2. 答案是肯定的，其实只需要将被其他单词末尾包含的单词删除掉，然后将剩下的单词长度求和并加上剩下单词个数即可。

## 代码实现

  1. 由于被包含的单词的长度肯定是小于等于另一个单词的，所以要判断这个单词是否被其他单词包含，需要找到长度最小的单词来和长度最大的单词来判断，所以可以先将数组从小到大进行排序。
  2. 排序完后，此时就可以从第一个单词开始循环判断是否有单词将其在最末端包含。
  3. 如何进行最好的循环判断呢？在第二层循环时可以从最末尾的单词开始判断，直到有符合条件的或者下标一样时即可退出此次循环。
  4. 得到最后的数组后可以通过转化为字符串求长度加一得结果，也可以通过循环遍历来计算出结果。
  5. ```javascript
     var minimumLengthEncoding = function (words) {
     words.sort((a, b) = a.length - b.length);
     for (let i = 0; i < words.length; i++) {
       let j = words.length - 1;
       while (j > i) {
         if (words[j].lastIndexOf(words[i]) === words[j].length - words[i].length) {
           words.splice(i, 1);
           i--;
           break;
         }
         j--;
       }
     }
     return words.toString().length + 1;
     };
     ```  
  6. 如图：  
  <img src="./img/1.PNG" /><br />
  代码是可行的并且在内存上也打败了100%，但是有个问题运行速度太慢了。那这该如何解决呢？可以通过牺牲一点空间来提升效率。
  7. 最大的问题就是这个判断这个单词是否被其他单词包含实在是太耗时间了。如果我们反着想，通过裁剪单词随意开始直到末端来判断这个被裁下来的字符串是否是单词表里的单词呢？这是可以的，但是好像比之前的解决方案更加麻烦，但是别忘了`ES6`中新增了一个内置对象`Set`,类似哈希表。可以很快的查找单词。
  8. 此时就不需要排序这个操作了。得到`Set`对象后通过循环遍历每个单词，将每个单词裁剪，并将得到的裁剪后的字符串来对应这个`Set`中是否存在，存在就将存在的单词删除即可。
  9. ```javascript
     var minimumLengthEncoding = function (words) {
       let setWords = new Set(words);
       for (const word of setWords) {
         for (let i = 1; i < word.length; i++){
           let target = word.slice(i);
           setWords.has(target) && setWords.delete(target);
         }
       }
       let len = 0;
       setWords.forEach(word => len += word.length + 1);
       return len;
     };
     ```
  10. 如图：  
  <img src="./img/2.PNG" /><br />
  此时可以发现时间大幅度的提升了，并且内存也仅仅只是多消耗了一点而已。

### 到这里分享就结束了，谢谢大家