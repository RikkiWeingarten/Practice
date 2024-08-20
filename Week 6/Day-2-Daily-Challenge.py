class Pagination:
    def __init__(self, items, pageSize):
        self.items = items
        self.pageSize = pageSize
        self.currPage = 1
        self.totalPages = len(items)

    def getVisibleItems(self):
        start = (self.currPage - 1) * self.pageSize
        end = start + self.pageSize
        return self.items[start:end]

    def prevPage(self):
        self.currPage = max(1, self.currPage - 1)
        return self

    def nextPage(self):
        self.currPage = min(self.currPage + 1,
                            (len(self.items) - 1) // self.pageSize + 1)
        return self

    def firstPage(self):
        self.currPage = 1
        return self

    def lastPage(self):
        self.currPage = (len(self.items) - 1) // self.pageSize + 1
        return self

    def goToPage(self, pageNum):
        if pageNum < 1:
            self.currPage = 1
        elif pageNum > (len(self.items) - 1) // self.pageSize + 1:
            self.currPage = (len(self.items) - 1) // self.pageSize + 1
        else:
            self.currPage = pageNum
        return self


alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

print(p.getVisibleItems())  # ["a", "b", "c", "d"]

p.nextPage()
print(p.getVisibleItems())  # ["e", "f", "g", "h"]

p.lastPage()
print(p.getVisibleItems())  # ["y", "z"]
