# // _NAME: Sliding Puzzle
# // _LINK: https://leetcode.com/problems/sliding-puzzle/
# // _CATEGORY: Graph


import json
from copy import copy, deepcopy


class Solution(object):
    def slidingPuzzle(self, board):
        """
        :type board: List[List[int]]
        :rtype: int
        """

        def findStart():
            for i in range(len(board)):
                for j in range(len(board[i])):
                    if board[i][j] == 0:
                        return (i, j)

        CORRECT_POS = json.dumps([[1, 2, 3], [4, 5, 0]])

        MOVES = {(0, 0): [(0, 1), (1, 0)],
                 (0, 1): [(0, 0), (0, 2), (1, 1)],
                 (0, 2): [(0, 1), (1, 2)],
                 (1, 0): [(0, 0), (1, 1)],
                 (1, 1): [(1, 0), (1, 2), (0, 1)],
                 (1, 2): [(1, 1), (0, 2)]}

        swaps = 0
        start = findStart()

        q = [(start, deepcopy(board))]
        seen = set()

        while q:

            curr_level = q
            q = []

            for (pos, curr_board) in curr_level:

                # add to seen
                seen.add(json.dumps(curr_board))

                # check to see if correct_pos
                if json.dumps(curr_board) == CORRECT_POS:
                    return swaps

                for move in MOVES[pos]:

                    copy_board = deepcopy(curr_board)
                    move_x, move_y = move
                    curr_x, curr_y = pos

                    # swap
                    temp = copy_board[curr_x][curr_y]
                    copy_board[curr_x][curr_y] = copy_board[move_x][move_y]
                    copy_board[move_x][move_y] = temp

                    if json.dumps(copy_board) in seen:
                        continue

                    q.append(((move_x, move_y), copy_board))

            swaps += 1

        return -1
