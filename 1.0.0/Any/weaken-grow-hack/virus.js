/*
POSTED BY:
u/Calebhk98 (https://www.reddit.com/user/Calebhk98)

POSTED ON:
November 2nd, 2017

COMMENT CONTEXT:
"This script is a virus that gains access to everyone, and grows/weakens/hacks them appropriately."

REDDIT POST:
https://www.reddit.com/r/Bitburner/comments/79vncv/script_sharing_request/
*/



function defaultHack(server){
	hack(server);
	return true;
	}
	function boolToNumber(check){
		if(check===true){
			return 1;
	}
	else{
		return 0;
	}
}
Brute=boolToNumber(fileExists('brutessh.exe','home'));//Not able to add in True and false
Crack=boolToNumber(fileExists('ftpcrack.exe','home'));
Relay=boolToNumber(fileExists('relaysmtp.exe','home'));
Http=boolToNumber(fileExists('httpworm.exe','home'));
Sql=boolToNumber(fileExists('sqlinject.exe','home'));
BreackThrough=Brute+(Crack)+(Relay)+(Http)+(Sql);
servers=scan();
print(servers);
while(true){
	for(i = 0; i < servers.length; ++i) {
		if(servers[i]!="home"){
			if(hasRootAccess(servers[i])){
				scp('hackemall.script','home',servers[i]);
				exec('hackemall.script',servers[i]);
				if(getServerMoneyAvailable(servers[i])>(getServerMaxMoney(servers[i])/2)){
							if(getServerSecurityLevel(servers[i])>getServerBaseSecurityLevel(servers[i])+10){
					   weaken(servers[i]);
					}
					else     if(getHackingLevel()>=getServerRequiredHackingLevel(servers[i]))    {
						defaultHack(servers[i]);
					}
				}
				else{
					grow(servers[i]);
				}
			}
			else if(getServerNumPortsRequired(servers[i])<=BreackThrough){
				if(Sql){
					sqlinject(servers[i]);
				}
				if(Http){
					httpworm(servers[i]);
				}
				if(Crack){
					ftpcrack(servers[i]);
				}
				if(Relay){
				   relaysmtp(servers[i]);
				}
				if(Brute){
					brutessh(servers[i]);
				}
				nuke(servers[i]);
			}
			else{
				print("Too many ports needed");
				print("I need ");
				print(getServerNumPortsRequired(servers[i]));
				print("For");
				print (servers[i]);

			}
		}
	}
}