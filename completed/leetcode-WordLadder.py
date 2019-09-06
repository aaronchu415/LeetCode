# // _NAME: Word Ladder
# // _LINK: https://leetcode.com/problems/word-ladder/
# // _CATEGORY: Graph


class Solution:
    def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:

        def makeIntermediateWordDict():

            o = {}

            for word in wordList + [beginWord]:
                for i in range(len(word)):
                    intermediate_word = word[0:i] + '*' + word[i+1:]
                    if intermediate_word in o:
                        o[intermediate_word].append(word)
                    else:
                        o[intermediate_word] = [word]

            return o

        q = [(beginWord, 1)]
        seen = set()
        wordList_set = set(wordList)

        intermediate_word_dict = makeIntermediateWordDict()

        def getChildren(word):

            output = []

            for i in range(len(word)):
                intermediate_word = intermediate_word = word[0:i] + \
                    '*' + word[i+1:]
                for i_w in intermediate_word_dict[intermediate_word]:
                    if i_w != word:
                        output.append(i_w)

            return output

        while(q):

            curr, steps = q.pop(0)

            # if curr is t we are done
            if curr == endWord:
                return steps

            # seen
            seen.add(curr)

            # childs
            childrens = getChildren(curr)
            for child in childrens:
                if child not in seen:
                    q.append((child, steps+1))

        return 0
