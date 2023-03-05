#include <iostream>
#include <bits/stdc++.h>

using namespace std;

int sumS = 0;

int subset(const vector<int>& v, int step, int recSum, bool isAddition) {
    if (isAddition) {
        recSum+= v[step];
    }

    if (step == v.size()) {
        return abs(sumS - 2 * recSum);
    }

    int right = subset(v, step + 1, recSum, false);
    int left = subset(v, step + 1, recSum, true);

    return min(right, left);
}

int main() {
    int n;

    vector<int> a;

    cin >> n;

    for (int i = 0; i < n; ++i) {
        int d;
        cin >> d;
        a.push_back(d);
    }

    sumS = accumulate(a.begin(), a.end(), 0);

    cout << min(subset(a, 0, 0, true), subset(a, 0, 0, false)) << endl;
}
