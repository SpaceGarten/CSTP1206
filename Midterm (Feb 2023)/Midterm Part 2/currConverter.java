import java.util.ArrayList;
import java.util.Scanner;

// Define an interface for currency converters
interface CurrencyConverter {
    double convert(double amount);
}

// Implement the CurrencyConverter interface for USD
class USDCurrencyConverter implements CurrencyConverter {
    private final double rate = 1.0;
    public double convert(double amount) {
        return amount * rate;
    }
}

// Implement the CurrencyConverter interface for CAD
class CADCurrencyConverter implements CurrencyConverter {
    private final double rate = 1.26;
    public double convert(double amount) {
        return amount * rate;
    }
}

// Implement the CurrencyConverter interface for MXN
class MXNCurrencyConverter implements CurrencyConverter {
    private final double rate = 20.02;
    public double convert(double amount) {
        return amount * rate;
    }
}

// Implement the CurrencyConverter interface for GBP
class GBPCurrencyConverter implements CurrencyConverter {
    private final double rate = 0.71;
    public double convert(double amount) {
        return amount * rate;
    }
}

// Implement the CurrencyConverter interface for AUD
class AUDCurrencyConverter implements CurrencyConverter {
    private final double rate = 1.31;
    public double convert(double amount) {
        return amount * rate;
    }
}

public class currConvert {
    public static void main(String[] args) {
        // Create an ArrayList to store the currency codes
        ArrayList<String> currencies = new ArrayList<>();
        currencies.add("USD");  // Add USD
        currencies.add("CAD");  // Add CAD
        currencies.add("MXN");  // Add MXN
        currencies.add("GBP");  // Add GBP
        currencies.add("AUD");  // Add AUD

        // Create an ArrayList to store the currency converters
        ArrayList<CurrencyConverter> converters = new ArrayList<>();
        converters.add(new USDCurrencyConverter());  // Add USD converter
        converters.add(new CADCurrencyConverter());  // Add CAD converter
        converters.add(new MXNCurrencyConverter());  // Add MXN converter
        converters.add(new GBPCurrencyConverter());  // Add GBP converter
        converters.add(new AUDCurrencyConverter());  // Add AUD converter

        // Display the list of currencies and their current rates
        System.out.println("List of currencies and their current rate:");
        for (int i = 0; i < currencies.size(); i++) {
            // Use the currency code and the corresponding converter object to display the current rate
            System.out.println(currencies.get(i) + ": " + converters.get(i).convert(1.0));
        }

        // Scanner is used here to get the currency code from the user input
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the currency you want to convert to (e.g. USD): ");

        // Scanner is used here to read the amount entered by the user
        String currencyCode = scanner.nextLine().toUpperCase();
        int index = currencies.indexOf(currencyCode);
        if (index == -1) {
            System.out.println("Invalid currency code");
            return;
        }

        // Get the amount to convert from the user
        System.out.print("Enter the amount you want to convert: ");
        double amount = scanner.nextDouble();

        // Convert the amount to the selected currency using the corresponding converter object
        double convertedAmount = converters.get(index).convert(amount);
        // Display the converted amount and the corresponding currency
        System.out.println(amount + " " + currencyCode + " is equivalent to " + convertedAmount + " " + currencies.get(index));
    }
}
