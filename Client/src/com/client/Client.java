package com.client;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.net.Socket;
import java.net.UnknownHostException;

//Java program CLient
public class Client {
    //initial socket and input output streams
    private Socket socket   = null;
    private DataInputStream input = null;
    private DataOutputStream out = null;

    //contructor to put ip address and port
    public Client (String address, int port) {

        //establish a connections
        try{
            socket = new Socket(address, port);
            System.out.println("Connected");

            //takes input from terminal
            input = new DataInputStream(System.in);

            //sends output to the socket
            out = new DataOutputStream(socket.getOutputStream());
        }
        catch (UnknownHostException u)
        {
            System.out.println(u);
        } catch (IOException i)
        {
            System.out.println(i);
        }

        //string to read message input
        String line = "";

        while (!line.equals("Over"))
        {
            try {
                line = input.readUTF();
                out.writeUTF(line);
            } catch (IOException i)
            {
                System.out.println(i);
            }
        }

    }

}
