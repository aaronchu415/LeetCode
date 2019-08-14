# // _NAME: All Paths From Source to Target
# // _LINK: https://leetcode.com/problems/all-paths-from-source-to-target/
# // _CATEGORY: Graph


class Solution:
    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:

        paths = []

        def dfs(idx, arr):

            # add current step into curr arr
            arr.append(idx)

            # if reach the end then we done and append to output
            if idx == len(graph)-1:
                paths.append(arr.copy())
                return

            # find next places to go and go there
            next_spots = graph[idx]
            for spots in next_spots:
                dfs(spots, arr)
                arr.pop()

        dfs(0, [])

        return paths
