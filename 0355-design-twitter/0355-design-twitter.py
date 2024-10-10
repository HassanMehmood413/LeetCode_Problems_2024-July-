class Twitter:

    def __init__(self):
        self.count = 0
        self.following = defaultdict(set)
        self.tweet = defaultdict(list)

    def postTweet(self, userId: int, tweetId: int) -> None:
        self.tweet[userId].append((self.count, tweetId))
        self.count -= 1

    def getNewsFeed(self, userId: int) -> List[int]:
        res = []

        minHeap = []

        # Include user's tweets
        if userId in self.tweet:
            index = len(self.tweet[userId]) - 1
            if index >= 0:  # Ensure index is valid
                count, tweet = self.tweet[userId][index]
                heapq.heappush(minHeap, (count, userId, index - 1, tweet))

        # Include tweets from followed users
        for followerId in self.following[userId]:
            if followerId in self.tweet and len(self.tweet[followerId]) > 0:
                index = len(self.tweet[followerId]) - 1
                if index >= 0:  # Ensure index is valid
                    count, tweet = self.tweet[followerId][index]
                    heapq.heappush(minHeap, (count, followerId, index - 1, tweet))

        # Extract up to 10 most recent tweets
        while minHeap and len(res) < 10:
            count, followerId, index, tweet = heapq.heappop(minHeap)
            res.append(tweet)
            if index >= 0:
                time, tweetId = self.tweet[followerId][index]
                heapq.heappush(
                    minHeap, (time, followerId, index - 1, tweetId)
                )  # Correct the order of arguments

        return res

    def follow(self, followerId: int, followeeId: int) -> None:
        self.following[followerId].add(followeeId)

    def unfollow(self, followerId: int, followeeId: int) -> None:
        if followeeId in self.following[followerId]:
            self.following[followerId].remove(followeeId)


# Your Twitter object will be instantiated and called as such:
# obj = Twitter()
# obj.postTweet(userId,tweetId)
# param_2 = obj.getNewsFeed(userId)
# obj.follow(followerId,followeeId)
# obj.unfollow(followerId,followeeId)
