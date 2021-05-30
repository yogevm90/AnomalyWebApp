# AnomalyWebApp

AnomalyWebApp is a node js appliaction allowing to connect to server and using it to detect anomalies in csv files.
Usage can be done by two way - via the browser or with REST Api

Browser:
By navigation to server's home page ('/') - just upload the 2 csv files (training file and check file) and choose from the algorythms available.
Result will be shown on the box on the same page.

REST Api:
Appliaction allows to send REST requests and get back json result according to the following Api -
key1: 'files', value: 2 files - 'training.csv' and 'check.csv'
key2: 'algo_type', value: 'hybrid' or 'regressive'

In order to run appliaction - Anomaly Detection server must run as well.
