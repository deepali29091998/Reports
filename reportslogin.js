const {Builder, By, Key, until} = require('selenium-webdriver');
const {Actions} = require('selenium-webdriver');


async function openManagePage() {
    // Initialize the Chrome browser
    let driver = await new Builder().forBrowser('chrome').build();
    
    // Open Manage website
    await driver.get('https://manage.fieldassist.in/');
    
    // Maximize the browser window
    await driver.manage().window().maximize();
    
    // Enter Emailbox 1
    let enterEmailId = await driver.wait(until.elementLocated(By.xpath("//input[@id='Email']")), 10000);
    
    // Enter Email and press Enter
    await enterEmailId.sendKeys('sample.com', Key.RETURN);
    
    // Enter Password box 2
    let enterPassword = await driver.wait(until.elementLocated(By.xpath("//input[@id='Password']")), 10000);
    
    // Enter Password and press Enter
    await enterPassword.sendKeys('Test@150', Key.RETURN);
   
	// Wait for some time after logging in (e.g., 10 seconds)
	        await driver.sleep(3000); 
	
    // Click on the user profile (e.g., Deepali)
    await driver.wait(until.elementLocated(By.xpath("//a[@class='dropdown-toggle']")), 10000).click();
    
	// click on switch company
	await driver.wait(until.elementLocated(By.xpath("//a[normalize-space()='Switch Company']")), 10000).click();
	
	//switch company
	//await driver.wait(until.elementLocated(By.xpath("//input[@placeholder='Select Company']")), 10000).click();
	
	// click company name box 
	  let enterCompanyName = await driver.wait(until.elementLocated(By.xpath("//input[@placeholder='Select Company']")), 10000);
		
	  	
	// Enter Company name to switch
	await enterCompanyName.sendKeys('Monsoon pvt lmt (Deepali Sri)');


	// Wait for the dropdown options to appear (adjust XPath according to actual dropdown item)
	await driver.wait(until.elementLocated(By.xpath("//li[contains(text(), 'Monsoon pvt lmt (Deepali Sri)')]")), 10000);
     
	// click on appeared result of companies
	await driver.wait(until.elementLocated(By.xpath("//span[@class='k-icon k-i-arrow-60-down']")), 10000).click();
	
	// After the dropdown appears, click OK button
	await driver.wait(until.elementLocated(By.xpath("//a[@role='button'][normalize-space()='Ok']")), 10000).click();
	
	await driver.sleep(5000); 
	/*
	* this is for New dashboard only
	// click on dashboard option to apear all
	await driver.wait(until.elementLocated(By.xpath("//button[@class='inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-icon-hover']//*[name()='svg']")), 10000).click();

	//click on Analytics
	let dropdownOptions = await driver.wait(until.elementLocated(By.xpath("//body/div[@id='__nuxt']/div/div[@class='relative h-screen max-h-screen min-h-screen bg-card-background tracking-wide']/div/div[@class='absolute top-0 z-20 h-full min-h-screen overflow-y-auto bg-app-bar-background pb-4 pt-12 shadow transition-all duration-150 w-64']/div/div[@class='overflow-x-hidden text-center']/div[12]/div[1]")), 10000).click();

	// Wait for the dropdown options to appear
	let dropdownOptions = await driver.wait(until.elementsLocated(By.css("div[role='option']")), 10000);

	// Click on the first option
	await dropdownOptions[0].click();
	
	     		//click on Reports
      await dropdownOptions.wait(until.elementLocated(By.xpath("//div[12]//*[name()='svg']")), 10000).click(); */
	
	  // click on report option
	  await driver.wait(until.elementLocated(By.xpath("//h3[normalize-space()='Reports V3']")), 10000).click();
  
	  await driver.sleep(3000); 

	  // click on Dump reports
	await driver.wait(until.elementLocated(By.xpath("//body/div[@class='dashnav']/div[@id='nav']/div[@id='mCSB_1']/div[@id='mCSB_1_container']/div/div[@id='reportsTelerik']/ul[@class='jstree-no-dots jstree-no-icons']/li[@id='Dump_Data_report_node']/ins[1]")), 10000).click();

	//scroll down
	// Scroll a specific element using its XPath
	let dragger = await driver.findElement(By.xpath("//div[@class='mCSB_dragger_bar']"));
	
	let actions = driver.actions({bridge: true});

	await actions.dragAndDrop(dragger, {x: 0, y: 120}).perform();  // 120px - 113px = 7px vertical drag


	// Scroll the specific element down by 190 pixels
	//await driver.executeScript("arguments[0].scrollTop -= 190;", scrollableElement);

	//await driver.executeScript("reportData[1].click();", reportsButton);

	await driver.sleep(2000); 
	  // click on Sec Order Dump report
	  	  await driver.wait(until.elementLocated(By.xpath("//li[@id='report_id_Dump_Data1']//a[1]")), 10000).click(); 
		  
     // we are on new page, move our command to newly open page
	 let mainPage = await driver.getWindowHandle();

		  	let allPages = await driver.getAllWindowHandles(); // Get handles of all open windows

		  		for (let page of allPages) {
		  		    if (page !== mainPage) {
		  		        await driver.switchTo().window(page); // Switch to the new page
		  		        break;
		  		    }
		  		}
		  		
		  		let currentUrl = await driver.getCurrentUrl();
		  		console.log("current url = " + currentUrl);
	
		//scroll down to bottom of the page
		await driver.executeScript("window.scrollTo(0, document.body.scrollHeight);");
		
        await driver.sleep(5000);
		
		
		
		// select start date box
		 let startDate = await driver.wait(until.elementLocated(By.xpath("//input[@id='datepicker1']")), 10000)

		 await startDate.clear();
		 
		 await driver.sleep(2000); 


		// Type start date in the search box and press Enter
		       await startDate.sendKeys('01-09-2024', Key.RETURN);
        
			   await driver.sleep(2000);	
			   	   
		// select End date box
		let endDate = await driver.wait(until.elementLocated(By.xpath("//input[@id='datepicker2']")), 10000)
			   		 
		// Type start date in the search box and press Enter
			       await endDate.sendKeys('28-09-2024', Key.RETURN);

				   await driver.sleep(5000);	

		// click on download 		   				      
			await driver.wait(until.elementLocated(By.xpath("//a[@id='downloadbutton']")), 10000).click(); 

		// click on my requests		   				      
		   await driver.wait(until.elementLocated(By.xpath("//a[normalize-space()='My Requests']")), 10000).click(); 
			
		   
		   // we are again on new page i.e report request page, move our command to newly open page
		  
					
		   // Wait for some time for the report status to change
				
				// Refresh the entire page
				
				await driver.sleep(100000); // Allow some time for page to reload

				await driver.navigate().refresh();

				/*
				// Assume you are already on the report request page

				// Wait for the table rows to be present
				await driver.wait(until.elementsLocated(By.xpath("//body/div[@id='content']/div[@id='reportbody']/div[2]")), 10000);

				// Get all the rows of the report request table
				let rows = await driver.findElements(By.xpath("//body/div[@id='content']/div[@id='reportbody']/div[2]"));
				
				console.log(`rows are like this : ${rows}`)

				// Loop through the rows to find the one with 'Executed' in 'Request Status'
				for (let row of rows) {
				    // Get the 'Request Status' cell (assumed to be in the 5th column based on your screenshot)
				    let requestStatusCell = await row.findElement(By.xpath("//tbody/tr[1]/td[4]"));
				    let statusText = await requestStatusCell.getText();
				    
				    // Check if the status is 'Executed'
				    if (statusText === 'Executed') {
				        // If found, locate the 'Report Name' cell (assumed to be in the 6th column)
				        let reportNameCell = await row.findElement(By.xpath("//body[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[3]/table[1]/tbody[1]/tr[1]/td[6]/a[1]"));
				        let reportNameText = await reportNameCell.getText();
				        
				        console.log(`Found report: ${reportNameText}`);
				        
				        // Click the 'Report Name' link
				        await reportNameCell.click();
				        break; // Exit the loop after finding and clicking the first executed report
				    }
				}
				*/
				
				// clcik on Details:
				await driver.wait(until.elementLocated(By.xpath("//body[1]/div[6]/div[1]/div[2]/div[1]/div[1]/div[3]/table[1]/tbody[1]/tr[1]/td[6]/a[1]")), 10000).click(); 

				// click on my requests		   				      
				await driver.wait(until.elementLocated(By.xpath("//a[normalize-space()='Click Here To Download']")), 10000).click(); 
				
				
}

openManagePage();
