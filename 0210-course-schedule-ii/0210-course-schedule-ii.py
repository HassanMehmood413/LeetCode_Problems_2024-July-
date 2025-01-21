class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        graph = {}
        result = []
        queue = []
        indegree = [0] * numCourses

        def again(garph, first, second):
            if not first in graph:
                graph[first] = []

            graph[first].append(second)
            indegree[second] += 1

        for first, second in prerequisites:
            again(graph, first, second)

        # checking point from where we start
        for point in range(numCourses):
            if indegree[point] == 0:
                queue.append(point)

        while len(queue) > 0:
            first = queue.pop(0)
            result.append(first)
            for neighbor in graph.get(first, []):
                indegree[neighbor] -= 1
                if indegree[neighbor] == 0:
                    queue.append(neighbor)

        return result[::-1] if len(result) == numCourses else []


        # Time Complexity : 0(V + E)
        # Space Complexity : 0(V + E)
