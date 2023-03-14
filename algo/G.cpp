#include <iostream>
#include <bits/stdc++.h>

using namespace std;

int main() {

    unordered_map<char, int> m;
    vector<pair<unsigned int, char>> rd;

    string line;
    cin >> line;

    for (char & i : line) {
        m[i]++;
    }

    for (int i = 'a'; i <= 'z'; ++i) {
        int c;
        cin >> c;

        rd.emplace_back(c, (char)i);
    }
    
    sort(rd.begin(), rd.end(), [](auto const &a, auto const &b) {
        return a.first > b.first;
    });

    string ans;
    vector<char> rev_ans;

    for (auto & i : rd) {
        int v1 = m[i.second];

        if (v1 >= 2) {
            rev_ans.push_back(i.second);
            m[i.second]-=2;
        }
    }

    for (auto& it: m) {
        ans+=string(it.second, it.first);
    }
    string v = string(rev_ans.begin(), rev_ans.end());

    cout << v + ans;
    std::reverse(v.begin(), v.end());
    cout << v << endl;
}
