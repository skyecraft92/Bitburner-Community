/*
POSTED BY:
u/JasonP1625 (https://www.reddit.com/user/JasonP1625)

POSTED ON:
June 29th, 2017

COMMENT CONTEXT:
"I have one that I use for hacking the ones which just require BruteSSH.exe after they're hacked."

REDDIT POST:
https://www.reddit.com/r/Bitburner/comments/6gzpxg/any_useful_scripts_to_share/
*/



money = Array[1000000,1300000,1750000,2000000,2500000,3500000,4500000,7500000,11000000,20000000];
servers = Array["foodnstuff","sigma-cosmetics","joesguns","nectar-net","hong-fang-tea","harakiri-sushi","neo-net","zer0","max-hardware","iron-gym"];
t = servers.length;
while(true) {
    for (i = 0; i < t; i = i+1) {  
        s = servers[i];
        m = money[i];
        if (hasRootAccess(s) == true) {
            se = getServerBaseSecurityLevel(s);
			while (getServerSecurityLevel(s) > (se/3+1)) {
				weaken(s);
			};
			if (getServerMoneyAvailable(s) > m*40) {
				hack(s);
			};
        };
    };
}