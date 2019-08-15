# // _NAME: Is Graph Bipartite?
# // _LINK: https://leetcode.com/problems/is-graph-bipartite/
# // _CATEGORY: Graph


class Solution:
    def isBipartite(self, graph: List[List[int]]) -> bool:

        b = True

        def children_in_bin(childs, curr_bin):
            for c in childs:
                if c in curr_bin:
                    return True
            return False

        def dfs(i, curr_bin, opp_bin):

            nonlocal b

            # if false then return
            if not b:
                return

            # add curr to curr_bin
            if i not in curr_bin:
                curr_bin.add(i)

            # check if children in curr_bin
            # if so then return b
            if children_in_bin(graph[i], curr_bin):
                b = False
                return

            # try to put children in opposite bin
            for child in graph[i]:
                if child not in opp_bin:
                    opp_bin.add(child)

            # put i into seen
            seen.add(i)

            # explore child if not seen
            for child in graph[i]:
                if child not in seen:
                    dfs(child, opp_bin, curr_bin)

        seen = set()

        for i in range(len(graph)):
            bin_one = set()
            bin_two = set()
            dfs(i, bin_one, bin_two)

        return b
