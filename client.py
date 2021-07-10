from socket import *

Host = gethostname()
port = 55551

client = socket(AF_INET, SOCK_STREAM)
client.connect((Host, port))

while 1:
    data = input("Enter vote")
    client.send(data.encode())
