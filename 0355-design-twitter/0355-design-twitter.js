var Twitter = function() {
    this.time = 0;
    this.tweet = new Map();
    this.following = new Map();
};

Twitter.prototype.postTweet = function(userId, tweetId) {
    if (!this.tweet.has(userId)) {
        this.tweet.set(userId, []);
    }
    this.tweet.get(userId).push({ tweetId, time: this.time++ });
};

Twitter.prototype.getNewsFeed = function(userId) {
    let res = [];
    
    if (!this.following.has(userId)) {
        this.following.set(userId, new Set());
    }
    const users = this.following.get(userId);
    users.add(userId); // Add the user themselves to get their tweets
    
    let allTweets = [];
    for (let user of users) {
        const userTweets = this.tweet.get(user) || [];
        allTweets = allTweets.concat(userTweets);
    }
    
    // Sort all tweets by time in descending order
    allTweets.sort((a, b) => b.time - a.time);
    
    // Get the 10 most recent tweets
    for (let i = 0; i < Math.min(10, allTweets.length); i++) {
        res.push(allTweets[i].tweetId);
    }
    
    return res;
};

Twitter.prototype.follow = function(followerId, followeeId) {
    if (!this.following.has(followerId)) {
        this.following.set(followerId, new Set());
    }
    this.following.get(followerId).add(followeeId);
};

Twitter.prototype.unfollow = function(followerId, followeeId) {
    if (this.following.has(followerId)) {
        this.following.get(followerId).delete(followeeId);
    }
};