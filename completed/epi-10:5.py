# // _NAME: Compute the Median of Online Data
# // _LINK: https://elementsofprogramminginterviews.com/
# // _CATEGORY: EPI


import heapq


class MedianFinder:

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.min_heap = []
        self.max_heap = []

    def addNum(self, num: int) -> None:

        # add to min_heap
        heapq.heappush(self.min_heap, num)
        # rebalance to max_heap
        x = heapq.heappop(self.min_heap)
        heapq.heappush(self.max_heap, -x)

        # we want to keep min_heap greater or equal in size to max_heap
        if len(self.max_heap) > len(self.min_heap):
            y = heapq.heappop(self.max_heap)
            heapq.heappush(self.min_heap, -y)

    def findMedian(self) -> float:
        if len(self.min_heap) == len(self.max_heap):
            return 0.5 * (self.min_heap[0] + -self.max_heap[0])
        else:
            return self.min_heap[0]


# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(num)
# param_2 = obj.findMedian()
