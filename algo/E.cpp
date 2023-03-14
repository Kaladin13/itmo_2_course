#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;


int main() {
    int n, k;

    cin >> n >> k;

    vector<int> a;

    for (int i = 0; i < n; ++i) {
        int v;
        cin >> v;
        a.push_back(v);
    }

    int l = 0;
    int r = (a.back() - a.front()) / (k - 1) + 1;

    while (r - l > 1) {
        int m = (l+r + 1)/2;

        int prev = 0;

        int cl = k - 1;

        for (int i = 1; i < a.size(); ++i) {
            prev+= (a[i] - a[i-1]);
            if (prev >= m) {
                prev = 0;
                cl--;
            }

            if (cl <= 0) {
                break;
            }
        }

        if (cl == 0) {
            l = m;
        }
        else {
            r = m;
        }
    }

    cout << (int)(r+l)/2 << endl;
}
