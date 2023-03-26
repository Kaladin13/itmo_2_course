#include <iostream>
#include <bits/stdc++.h>

using namespace std;

int compare(pair<int, char> f, pair<int, char> s) {
    if (f.second < s.second) {
        return 1;
    }

    if (f.second > s.second) {
        return 0;
    }

    if (f.first < s.first) {
        return 1;
    } else {
        return 0;
    }

}

int main() {

    int n;
    cin >> n;

    string line;
    cin >> line;

    vector<pair<int, char>> sorted(line.size());

    for (int i = 0; i < line.size(); ++i) {
        sorted.at(i).first = i;
        sorted.at(i).second = line[i];
    }

    sort(sorted.begin(), sorted.end(), [](auto const &a, auto const &b) {
            return compare(a, b);
    });

    int num = n - 1;

    for (int i = 0; i < line.size(); i++) {
        cout << sorted[num].second;
        num = sorted[num].first;
    }

    cout << endl;

    return 0;
}