let a = "0";
let check = 0;
let b = [
    "120.138.69.27", "203.205.34.68", "14.161.41.125", "27.65.196.72",
    "14.241.230.44", "14.241.230.46", "101.99.33.17", "171.244.236.159",
    "116.103.137.160", "116.109.192.193", "113.22.213.208", "14.0.24.75",
    "14.169.96.162", "14.241.237.6", "171.225.253.98", "113.22.148.140",
    "171.247.107.111", "27.65.196.73",
    "171.253.135.173", "1.55.41.188",
    "1.53.157.191", "113.172.200.215", "118.69.37.215",
    "14.183.242.91", "1.55.193.215", "118.71.163.125",
    "14.177.49.113", "171.232.44.43",
    "180.93.114.105", "113.179.229.45", "42.113.24.225",
    "103.199.38.140", "42.114.202.167",
    "172.124.68.210", "202.66.8.113", "42.118.146.160",
    "113.172.245.239", "113.185.74.193 ",
    "27.72.174.15",
    "14.161.5.54", "14.241.75.178", "113.185.106.253", "113.161.64.20",
    "183.80.32.188", "115.73.221.16", "1.52.165.53", "1.53.148.215",
    "1.53.205.204", "123.18.86.0",
    "183.80.32.188", "171.253.129.66", "103.199.47.234",
    "125.214.59.4", "14.186.158.230",
    "42.116.107.38", "171.253.189.74", "171.240.186.59",
    "42.114.71.14", "1.53.171.67", "112.197.225.156",
    "113.185.83.79", "14.161.38.73", "42.119.38.42",
    "113.185.86.218", "103.199.39.230",
    "144.172.64.14", "27.74.178.183", "103.199.63.171", "103.199.39.141",
    "113.173.72.139", "1.53.56.116", "171.233.18.77",
    "103.199.38.112", "42.112.228.34", "171.253.185.104",
    "103.199.47.68", "27.65.59.132", "123.21.69.255",
    "171.253.1.217", "42.117.65.59", "112.197.73.80",
    "123.21.32.159", "1.53.158.211", "113.185.85.230",
    "113.185.86.91", "116.118.52.106",
    "27.79.40.24", "120.138.69.27", "115.78.5.208",
    "115.72.226.30", "113.173.123.228", "42.112.56.98",
    "42.118.201.232", "171.240.249.186", "116.105.106.25",
    "14.233.236.146", "119.17.228.39",
    "171.235.150.127", "103.199.60.21",
    "1.53.157.73", "42.114.206.80", "27.3.89.228",
    "14.253.177.143", "1.53.157.73", "42.114.206.80",
    "27.3.89.228", "14.253.177.143", "171.236.72.142",
    "171.227.196.185", "14.233.129.102", "123.21.70.251",
    "113.185.80.140", "27.78.177.99", "125.214.50.169",
    "115.78.12.248", "5.119.242.128", "113.23.16.68",
    "27.79.125.187", "125.214.59.71", "123.20.190.157",
    "1.53.3.9", "103.199.38.92", "42.112.90.143",
    "1.52.196.188", "171.233.27.171", "171.247.174.122",
    "14.187.77.155", "1.53.144.184", "1.52.107.142",
    "103.199.46.8", "103.249.23.198", "14.161.221.152",
    "115.74.20.245", "113.161.90.191", "115.75.39.146",
    "42.113.163.93", "103.199.47.166", "42.113.103.138",
    "27.78.218.135", "14.169.197.76", "27.75.224.250",
    "115.73.210.47", "171.246.111.40", "171.253.129.145",
    "103.7.38.73", "118.69.87.202", "113.23.29.230",
    "113.185.87.47", "1.53.144.178", "125.214.56.164",
    "113.185.84.31", "27.3.0.156", "123.21.212.98",
    "103.199.60.85", "103.199.47.243", "14.187.216.121",
    "14.250.127.223", "103.199.46.178", "1.52.244.144",
    "171.253.187.204", "183.80.61.31", "112.197.118.29",
    "116.100.33.235", "27.2.128.45", "116.106.248.200",
    "171.253.31.94", "171.232.117.41", "14.230.188.194",
    "116.108.181.49", "171.248.15.55", "42.112.227.75",
    "27.3.120.56", "171.226.159.16", "125.214.56.3",
    "14.251.27.128", "123.26.33.127", "125.214.50.8",
    "171.253.178.76", "113.172.58.25",
    "113.172.58.25", "42.113.2.92",
    "113.170.178.253", "113.182.155.172", "42.114.200.11",
    "171.253.19.165", "115.74.7.27",
    "2402:800:435b:d941:c853:7736:20fe:a4c2",
    "1.55.2.49", "116.98.183.153", "116.109.69.10",
    "1.55.92.50", "116.96.77.178", "113.187.245.111",
    "14.246.120.108", "14.183.213.147", "61.19.2.199",
    "14.246.120.108", "14.183.213.147", "61.19.2.199",
    "2402:800:634a:884a:ecbb:70ad:372f:7373",
    "118.68.103.121", "103.199.38.190",
    "198.199.87.124", "27.79.13.89", "103.129.189.138",
    "27.3.1.98", "113.189.92.238", "171.225.253.47",
    "27.78.34.225", "116.105.105.168", "123.19.163.88",
    "27.71.99.77", "113.165.144.152",
    "113.185.80.212", "171.252.154.175", "120.138.69.27",
"14.185.111.169",
    "42.112.230.195", "65.154.226.100", "14.185.111.169",

];
function getIP(json) {
    a = json.ip;
    for (let i = 0; i < b.length; i++) {
        if (a == b[i]) {
            check = 1;
            break
        }
    }
}
setTimeout(window.onload = () => {
    if (check == 0) {
        window.location = "https://www.moclinh.website/moclinhdich1b";
    }
}, 2000);