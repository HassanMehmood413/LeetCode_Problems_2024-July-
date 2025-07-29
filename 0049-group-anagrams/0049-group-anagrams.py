class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        result = []
        collector = {}

        for i in range(len(strs)):
            sorted_key =  ",".join((sorted(list(strs[i]))))
            if sorted_key not in collector:
                collector[sorted_key] = []

            collector[sorted_key].append(strs[i])
        
        for key,value in collector.items():
            result.append(value)
        return result