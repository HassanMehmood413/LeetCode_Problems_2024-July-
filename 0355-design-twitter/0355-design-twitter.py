class Twitter:

    def __init__(self):
        self.time = 0  # Keeps track of the time for ordering tweets
        self.following = defaultdict(set)  # Tracks who follows whom
        self.tweet = defaultdict(list)  # Tracks tweets for each user (timestamp, tweetId)

    def postTweet(self, userId: int, tweetId: int) -> None:
        # Add the tweet with the current time (negative for max-heap behavior in min-heap)
        self.tweet[userId].append((self.time, tweetId))
        self.time -= 1  # Decrease time to ensure proper ordering

    def getNewsFeed(self, userId: int) -> List[int]:
        res = []
        MinHeap = []

        # Include the user's own tweets in the feed
        if userId in self.tweet:
            index = len(self.tweet[userId]) - 1
            time, tweetId = self.tweet[userId][index]
            heapq.heappush(MinHeap, (time, tweetId, userId, index - 1))

        # Include tweets from followed users in the feed
        for followerId in self.following[userId]:
            if followerId in self.tweet and len(self.tweet[followerId]) > 0:
                index = len(self.tweet[followerId]) - 1
                time, tweetId = self.tweet[followerId][index]
                heapq.heappush(MinHeap, (time, tweetId, followerId, index - 1))

        # Extract up to 10 most recent tweets
        while MinHeap and len(res) < 10:
            time, tweetId, followerId, index = heapq.heappop(MinHeap)
            res.append(tweetId)
            if index >= 0:
                time, tweetId = self.tweet[followerId][index]
                heapq.heappush(MinHeap, (time, tweetId, followerId, index - 1))

        return res

    def follow(self, followerId: int, followeeId: int) -> None:
        # Add the followee to the follower's set of followed users
        self.following[followerId].add(followeeId)

    def unfollow(self, followerId: int, followeeId: int) -> None:
        # Remove the followee if they are being followed
        if followeeId in self.following[followerId]:
            self.following[followerId].remove(followeeId)