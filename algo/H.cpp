#include <iostream>
#include <bits/stdc++.h>

using namespace std;

int main() {
    int n, k;

    cin >> n >> k;

    vector<int> a;

    for (int i = 0; i < n; ++i) {
        int d;

        cin >> d;
        a.push_back(d);
    }

    std::sort(a.begin(), a.end());
    int all_sum = std::accumulate(a.begin(), a.end(), 0);

    for (int i = a.size() - k; i >= 0; i-=k) {
        all_sum-=a[i];
    }

    cout << all_sum << endl;
}
