import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class DarkModeButton {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Modo Escuro");
        JButton button = new JButton("Alternar Modo");
        
        button.setBounds(10, 10, 150, 30);
        button.setBackground(Color.CYAN);
        button.setForeground(Color.WHITE);
        
        frame.setLayout(null);
        frame.add(button);
        
        button.addActionListener(new ActionListener() {
            boolean darkMode = false;
            
            @Override
            public void actionPerformed(ActionEvent e) {
                if (darkMode) {
                    frame.getContentPane().setBackground(Color.WHITE);
                    button.setBackground(Color.CYAN);
                    button.setForeground(Color.WHITE);
                } else {
                    frame.getContentPane().setBackground(Color.DARK_GRAY);
                    button.setBackground(Color.GRAY);
                    button.setForeground(Color.BLACK);
                }
                darkMode = !darkMode;
            }
        });
        
        frame.setSize(400, 300);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}
