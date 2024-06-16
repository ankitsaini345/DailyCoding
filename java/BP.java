package java;

import java.util.*;
import java.lang.*;
import java.io.*;

// The main method must be in a class named 'Main'.
class BP {
    public static void main(String[] args) {
        Graph graph = new Graph();
        graph.addEdge('a', 'b');
        graph.addEdge('c', 'a');
        graph.addEdge('r', 's');
        graph.addEdge('b', 'c');
        graph.addEdge('x', 'c');
        graph.addEdge('q', 'r');
        graph.addEdge('y', 'x');
        graph.addEdge('w', 'z');
        
        System.out.println(graph.detectIntersection(new Character[]{'a', 'q', 'w'}));
        System.out.println(graph.detectIntersection(new Character[]{'a', 'c', 'r'}));
        System.out.println(graph.detectIntersection(new Character[]{'y', 'z', 'a', 'r'}));
        System.out.println(graph.detectIntersection(new Character[]{'a', 'w'}));
    }

}

class Node {
        Character label;
        Node next;
        public Node(Character label) {
            this.label = label;
            this.next = null;
        }
    }

class Graph {
        HashMap<Character, Node> nodes;
        public Graph () {
            nodes = new HashMap();
        }

        private void addNode(Character label) {
            Node node = new Node(label);
            nodes.put(label, node);
        }

        public void addEdge(Character from, Character to) {
            if(!nodes.containsKey(from)) 
                addNode(from);
            if(!nodes.containsKey(to)) 
                addNode(to);
            nodes.get(from).next = nodes.get(to);
        }

        public boolean detectIntersection(Character[] inputs) {
            HashSet<Character> allNodeSet = new HashSet();
            for (int i=0; i<inputs.length; i++) {
                Node list = nodes.get(inputs[i]);
                HashSet<Character> currNodeSet = new HashSet();
                while(list != null) {
                    Character label = list.label;
                    if(currNodeSet.contains(label)) break;
                    currNodeSet.add(label);
                        
                    if(allNodeSet.contains(label)) return true;
                    currNodeSet.add(label);

                    list = list.next;
                }
            }
            return false;
        }
        
    }

