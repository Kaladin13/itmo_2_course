#include <iostream>
#include <bits/stdc++.h>

using namespace std;

vector<string> split(const string &s, const string &delimiter) {
    size_t pos_start = 0, pos_end, delim_len = delimiter.length();
    string token;
    vector<string> res;

    while ((pos_end = s.find(delimiter, pos_start)) != string::npos) {
        token = s.substr(pos_start, pos_end - pos_start);
        pos_start = pos_end + delim_len;
        res.push_back(token);
    }

    res.push_back(s.substr(pos_start));
    return res;
}

int main() {
    string line;

    vector<unordered_map<string, int>> m;
    m.emplace_back();

    unordered_map<string, int> cur;

    vector<string> prom;

    while (getline(cin, line)) {
        if (line == "{") {
            m.emplace_back();
        } else if (line == "}") {

            for (const auto& it: m.back()) {
                cur[it.first] = it.second;
            }
            m.pop_back();
        } else {
            prom = split(line, "=");

            char *p;
            int conv = strtol(prom[1].c_str(), &p, 10);

            if (m.back().find(prom[0]) == m.back().end()) {
                m.back()[prom[0]] = cur[prom[0]];
            }

            if (!*p) {
//                m.back()[prom[0]] = m.back().find(prom[0]) != m.back().end() ? cur[prom[0]] : 0;

                cur[prom[0]] = conv;
                continue;
            }

//            m.back()[prom[0]] = m.back().find(prom[0]) != m.back().end() ? cur[prom[0]] : 0;

            cur[prom[0]] = cur[prom[1]];

            cout << cur[prom[0]] << endl;
        }
    }
}
