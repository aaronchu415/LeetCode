# // _NAME: Compute the Real Square Root
# // _LINK: https://elementsofprogramminginterviews.com/
# // _CATEGORY: EPI


def squareRoot(val, percision):

    l = 0
    h = 0

    # find high
    while h*h < val:
        h += 1
        if h*h == val:
            return h

    # divide and conquer to find square root
    while True:
        half = (l+h) / 2.0

        if abs(val - pow(half, 2)) < percision:
            return half

        if pow(half, 2) < val:
            l = half
        else:
            h = half


print(squareRoot(500, .0002))
