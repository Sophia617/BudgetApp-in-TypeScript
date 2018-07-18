var DisplayIncomeItem = /** @class */ (function () {
    function DisplayIncomeItem(incomeArray) {
        this.incomeArray = incomeArray;
    }
    // Display Income Items on UI
    DisplayIncomeItem.prototype.display = function () {
        // Get Income Item
        var id = this.incomeArray.getID();
        var description = this.incomeArray.getDescription();
        var value = this.incomeArray.getValue();
        // Display Income Item
        incomeField.insertAdjacentHTML('afterend', "\n            <div class=\"item clearfix\" id=\"income-" + id + "\">\n                <div class=\"item__description\">" + description + "</div>\n                <div class=\"right clearfix\">\n                     <div class=\"item__value\">+ " + value + "</div>\n                     <div class=\"item__delete\">\n                            <button class=\"item__delete--btn\"><i class=\"fas fa-minus-circle\"></i></button>\n                      </div>\n                    </div>\n             </div>\n        ");
    };
    // Remove Income Items on UI
    DisplayIncomeItem.prototype.removeDisplay = function (idElement) {
        var elem = document.getElementById("" + idElement);
        elem.remove();
    };
    return DisplayIncomeItem;
}());
var DisplayExpenseItem = /** @class */ (function () {
    function DisplayExpenseItem(expenseArray) {
        this.expenseArray = expenseArray;
    }
    // Display Expense Items on UI
    DisplayExpenseItem.prototype.display = function () {
        // Get Expense Item
        var id = this.expenseArray.getID();
        var description = this.expenseArray.getDescription();
        var value = this.expenseArray.getValue();
        // Display Expense Item
        expenseField.insertAdjacentHTML('afterend', "\n            <div class=\"item clearfix\" id=\"expense-" + id + "\">\n                <div class=\"item__description\">" + description + "</div>\n                <div class=\"right clearfix\">\n                     <div class=\"item__value\">- " + value + "</div>\n                     <div class=\"item__delete\">\n                            <button class=\"item__delete--btn\"><i class=\"fas fa-minus-circle\"></i></button>\n                      </div>\n                    </div>\n             </div>\n        ");
    };
    // Remove Expense Items on UI
    DisplayExpenseItem.prototype.removeDisplay = function (idElement) {
        var elem = document.getElementById("" + idElement);
        elem.remove();
    };
    return DisplayExpenseItem;
}());
var DisplayDate = /** @class */ (function () {
    function DisplayDate() {
        // Month Array
        this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    }
    DisplayDate.prototype.display = function () {
        // Get Month and Year
        var currentDate = new Date();
        var month = currentDate.getMonth();
        var year = currentDate.getUTCFullYear();
        // Display month
        currentMonthYear.innerText = this.monthNames[month] + " " + year;
    };
    DisplayDate.prototype.removeDisplay = function (idElement) { };
    return DisplayDate;
}());
var DisplayBudget = /** @class */ (function () {
    function DisplayBudget(budget) {
        this.budget = budget;
    }
    DisplayBudget.prototype.display = function () {
        // Get Total Amount of Value From the Budget
        var totalBudget = this.budget.getTotalBudget();
        var totalIncome = this.budget.getTotalIncome();
        var totalExpense = this.budget.getTotalExpense();
        var expPercent = this.budget.getExpensePercent();
        console.log(totalExpense);
        // Display Total Budget Field
        if (totalBudget >= 0) {
            totalBudgetField.innerHTML = "+ " + (totalBudget).toFixed(2);
        }
        else {
            totalBudgetField.innerHTML = "" + (totalBudget).toFixed(2);
        }
        // Display Total Income and Expense Field
        totalIncomeField.innerHTML = "+ " + (totalIncome).toFixed(2);
        totalExpenseField.innerHTML = "- " + (totalExpense).toFixed(2);
        totalExpensePercentField.innerHTML = (expPercent).toFixed(1) + "%";
    };
    DisplayBudget.prototype.removeDisplay = function (idElement) { };
    return DisplayBudget;
}());
