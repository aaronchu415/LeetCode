# // _NAME: Course Schedule
# // _LINK: https://leetcode.com/problems/course-schedule/
# // _CATEGORY: Graph


class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:

        def createAdjList():
            o = {}
            for preq in prerequisites:
                c, p = preq
                if p in o:
                    o[p].append(c)
                else:
                    o[p] = [c]
            return o

        adj_list = createAdjList()

        output = True
        seen = set()
        flagged = set()

        def dfs(curr_class):

            nonlocal output

            if not output:
                return

            # if it is in seen then auto return
            if curr_class in seen:
                return

            # add to seen so we dont explore again
            seen.add(curr_class)

            # add to flagged
            flagged.add(curr_class)

            # #if curr_class in flagged then return false
            # if curr_class in flagged:
            #     output = False

            # if theres no next class
            if curr_class not in adj_list:
                flagged.remove(curr_class)
                return

            next_classes = adj_list[curr_class]

            for c in next_classes:
                # if not been to before tehn explore
                if c in flagged:
                    output = False

                if c not in seen:
                    dfs(c)

            flagged.remove(curr_class)

        for p in prerequisites:
            dfs(p[0])
            dfs(p[1])

        return output
