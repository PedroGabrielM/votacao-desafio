from socket import *

Host = gethostname()
port = 55551
server = socket(AF_INET, SOCK_STREAM)
server.bind((Host, port))
server.listen(5)

print(f'Host -> {Host} , Port -> {port}')

while 1:
    con, adr = server.accept()
    while 1:
        msg = con.recv(1024)
        print(msg.decode())