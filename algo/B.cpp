#include <iostream>
#include <bits/stdc++.h>

using namespace std;

int main() {

    string line;
    cin >> line;

    vector<pair<char, int>> trap;

    vector<pair<int, int>> ans;

    int ind = 1;
    int d = 1;

    for (char &v: line) {
        if (isupper(v)) {

            if (!trap.empty() && !isupper(trap.back().first) && toupper(trap.back().first) == v) {
                ans.emplace_back(trap.back().second, d++);
                trap.pop_back();
            } else {
                trap.emplace_back(v, d++);
            }
        } else {
            if (!trap.empty() && isupper(trap.back().first) && toupper(v) == trap.back().first) {
                ans.emplace_back(ind++, trap.back().second);
                trap.pop_back();
            } else {
                trap.emplace_back(v, ind++);
            }
        }
    }

    if (!trap.empty()) {
        cout << "Impossible" << endl;
        return 0;
    }

    cout << "Possible\n";

    sort(ans.begin(), ans.end(), [](auto &left, auto &right) {
        return left.second < right.second;
    });

    for (auto t: ans) {
        cout << t.first << " ";
    }
}
