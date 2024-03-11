var Twitter = function () {
  this.tweetArray = [];
  this.followerMap = new Map();
  this.tweetCount = 0;
};

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  insert(this.tweetArray, [userId, this.tweetCount++, tweetId]);
};

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  let tweet,
    count = 0,
    ans = [];
  let tempTweetHeap = [...this.tweetArray];
  do {
    tweet = remove(tempTweetHeap);
    if (!tweet) break;
    tweetOwner = tweet[0];
    let fset = this.followerMap.get(userId);
    if (tweetOwner == userId || (fset && fset.has(tweetOwner))){
      ans.push(tweet[2]);
      count++;
    }
  } while (count < 10);
  return ans;
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  let followerSet = this.followerMap.get(followerId);
  if (followerSet) {
    followerSet.add(followeeId);
  } else {
    let followerSet = new Set();
    followerSet.add(followeeId);
    this.followerMap.set(followerId, followerSet);
  }
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  let followerSet = this.followerMap.get(followerId);
  if (followerSet) {
    followerSet.delete(followeeId);
  }
};

function insert(maxHeap, val) {
  maxHeap.push(val);
  bubbleUp(maxHeap);
}

function remove(maxHeap) {
  if (!maxHeap.length) return null;
  const item = maxHeap[0];
  swap(maxHeap, 0, maxHeap.length - 1);
  maxHeap.pop();
  bubbleDown(maxHeap);
  return item;
}

function bubbleUp(maxHeap, i = maxHeap.length - 1) {
  const parent = i === 0 ? -1 : Math.trunc((i - 1) / 2);
  if (parent < 0) return;

  if (maxHeap[parent][1] < maxHeap[i][1]) {
    swap(maxHeap, parent, i);
    bubbleUp(maxHeap, parent);
  }
}

function bubbleDown(maxHeap, parent = 0) {
  const left = 2 * parent + 1;
  const right = 2 * parent + 2;

  if (right < maxHeap.length) {
    if (
      maxHeap[right][1] >= maxHeap[left][1] &&
      maxHeap[right][1] > maxHeap[parent][1]
    ) {
      swap(maxHeap, right, parent);
      bubbleDown(maxHeap, right);
    } else if (
      maxHeap[left][1] >= maxHeap[right][1] &&
      maxHeap[left][1] > maxHeap[parent][1]
    ) {
      swap(maxHeap, left, parent);
      bubbleDown(maxHeap, left);
    }
  } else if (left < maxHeap.length && maxHeap[left][1] > maxHeap[parent][1]) {
    swap(maxHeap, left, parent);
    bubbleDown(maxHeap, left);
  }
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

const input = [
  "Twitter",
  "postTweet",
  "postTweet",
  "postTweet",
  "postTweet",
  "postTweet",
  "postTweet",
  "postTweet",
  "postTweet",
  "postTweet",
  "postTweet",
  "postTweet",
  "postTweet",
  "postTweet",
  "postTweet",
  "postTweet",
  "postTweet",
  "postTweet",
  "postTweet",
  "postTweet",
  "postTweet",
  "postTweet",
  "postTweet",
  "getNewsFeed",
  "follow",
  "getNewsFeed",
  "unfollow",
  "getNewsFeed",
];
const values = [
  [],
  [1, 5],
  [2, 3],
  [1, 101],
  [2, 13],
  [2, 10],
  [1, 2],
  [1, 94],
  [2, 505],
  [1, 333],
  [2, 22],
  [1, 11],
  [1, 205],
  [2, 203],
  [1, 201],
  [2, 213],
  [1, 200],
  [2, 202],
  [1, 204],
  [2, 208],
  [2, 233],
  [1, 222],
  [2, 211],
  [1],
  [1, 2],
  [1],
  [1, 2],
  [1],
];

var obj;
for (let i = 0; i < input.length; i++) {
  if (input[i] == "Twitter") obj = new Twitter();
  else if (input[i] == "postTweet") console.log(obj.postTweet(values[i][0], values[i][1]));
  else if (input[i] == "getNewsFeed") console.log(obj.getNewsFeed(values[i][0]));
  else if (input[i] == "follow") console.log(obj.follow(values[i][0], values[i][1]));
  else if (input[i] == "unfollow") console.log(obj.unfollow(values[i][0], values[i][1]));
}
/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

// let twitter = new Twitter();
// twitter.postTweet(1, 5); // User 1 posts a new tweet (id = 5).
// twitter.getNewsFeed(1); // User 1's news feed should return a list with 1 tweet id -> [5]. return [5]
// twitter.follow(1, 2); // User 1 follows user 2.
// twitter.postTweet(2, 6); // User 2 posts a new tweet (id = 6).
// twitter.getNewsFeed(1); // User 1's news feed should return a list with 2 tweet ids -> [6, 5]. Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
// twitter.unfollow(1, 2); // User 1 unfollows user 2.
// twitter.getNewsFeed(1); // User 1's news feed should return a list with 1 tweet id -> [5], since user 1 is no longer following user 2.
