# Test info

- Name: 📨 Send email & verify in Salesforce
- Location: /Users/pejin/Documents/copy/tests/test-5.spec.ts:33:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('gridcell', { name: /SUB-\d+/ }).locator('lightning-formatted-text') resolved to 50 elements:
    1) <lightning-formatted-text lwc-f6gbo863ml-host="">SUB-45368</lightning-formatted-text> aka getByText('SUB-45368')
    2) <lightning-formatted-text lwc-f6gbo863ml-host="">SUB-45367</lightning-formatted-text> aka getByText('SUB-45367')
    3) <lightning-formatted-text lwc-f6gbo863ml-host="">SUB-45361</lightning-formatted-text> aka getByText('SUB-45361')
    4) <lightning-formatted-text lwc-f6gbo863ml-host="">SUB-45360</lightning-formatted-text> aka getByText('SUB-45360')
    5) <lightning-formatted-text lwc-f6gbo863ml-host="">SUB-45359</lightning-formatted-text> aka getByText('SUB-45359')
    6) <lightning-formatted-text lwc-f6gbo863ml-host="">SUB-45354</lightning-formatted-text> aka getByText('SUB-45354')
    7) <lightning-formatted-text lwc-f6gbo863ml-host="">SUB-45352</lightning-formatted-text> aka getByText('SUB-45352')
    8) <lightning-formatted-text lwc-f6gbo863ml-host="">SUB-45351</lightning-formatted-text> aka getByText('SUB-45351')
    9) <lightning-formatted-text lwc-f6gbo863ml-host="">SUB-45350</lightning-formatted-text> aka getByText('SUB-45350')
    10) <lightning-formatted-text lwc-f6gbo863ml-host="">SUB-45348</lightning-formatted-text> aka getByText('SUB-45348')
    ...

Call log:
  - waiting for getByRole('gridcell', { name: /SUB-\d+/ }).locator('lightning-formatted-text')

    at /Users/pejin/Documents/copy/tests/test-5.spec.ts:123:91
```

# Page snapshot

```yaml
- link "Skip to Navigation":
  - /url: javascript:void(0);
- link "Skip to Main Content":
  - /url: javascript:void(0);
- button "Toggle Panel":
  - img
- paragraph: Sandbox
- paragraph: UAT
- button "Show menu"
- button "Search": Search...
- navigation "Global Header":
  - list:
    - listitem:
      - group:
        - button "This item doesn't support favorites":
          - tooltip "This item doesn't support favorites"
        - button "Favorites list":
          - tooltip "Favorites list"
    - listitem:
      - button "Global Actions":
        - tooltip "Global Actions"
    - listitem:
      - button "Guidance Center":
        - tooltip "Guidance Center"
    - listitem:
      - button "Salesforce Help":
        - tooltip "Salesforce Help"
    - listitem:
      - button "Setup":
        - tooltip "Setup"
    - listitem:
      - button "Notifications":
        - tooltip "Notifications"
    - listitem:
      - button "View profile":
        - tooltip "View profile"
- navigation "App":
  - button "App Launcher"
- heading "Process Associate" [level=1]
- navigation "Global":
  - list:
    - listitem:
      - link "Home":
        - /url: /lightning/page/home
    - listitem:
      - button "Edit nav items"
- main:
  - article:
    - paragraph:
      - strong: Team, please prioritize ALL submissions this week!
    - paragraph: Update
  - article:
    - heading "New Total count" [level=2]
    - paragraph: "2040"
  - article:
    - heading "New without LoB" [level=2]
    - paragraph: "2028"
  - article:
    - heading "New Urgent" [level=2]
    - paragraph: "7"
  - article:
    - heading "New for Renewal" [level=2]
    - paragraph: "4"
  - article:
    - heading "My Assigned Submission" [level=2]
    - paragraph: "1"
  - tablist "Tabs":
    - tab "New Submissions (not assigned)" [selected]
    - tab "Assigned Submissions"
  - tabpanel "New Submissions (not assigned)":
    - text: "New Submissions (not assigned) | Total Count: (2040) Search"
    - searchbox
    - button "Filter Line of Business"
    - text: Navigation Mode
    - grid:
      - rowgroup:
        - 'row "Categories Submission # Line of Business From Name Stage Assign To Me Sent Date"':
          - columnheader "Categories":
            - 'button "Sort by: Categories"'
            - text: "Sorted: None"
            - button "Show Categories column actions"
            - slider "Categories column width": "139"
          - 'columnheader "Submission #"':
            - 'button "Sort by: Submission #"'
            - text: "Sorted: None"
            - 'button "Show Submission # column actions"'
            - 'slider "Submission # column width"': "58"
          - columnheader "Line of Business":
            - 'button "Sort by: Line of Business"'
            - text: "Sorted: None"
            - button "Show Line of Business column actions"
            - slider "Line of Business column width": "164"
          - columnheader "From":
            - 'button "Sort by: From"'
            - text: "Sorted: None"
            - button "Show From column actions"
            - slider "From column width": "224"
          - columnheader "Name":
            - 'button "Sort by: Name"'
            - text: "Sorted: None"
            - button "Show Name column actions"
            - slider "Name column width": "409"
          - columnheader "Stage":
            - 'button "Sort by: Stage"'
            - text: "Sorted: None"
            - button "Show Stage column actions"
            - slider "Stage column width": "89"
          - columnheader "Assign To Me":
            - text: Assign To Me
            - slider "Assign To Me column width": "50"
          - columnheader "Sent Date":
            - 'button "Sort by: Sent Date"'
            - text: Sorted Descending
            - button "Show Sent Date column actions"
            - slider "Sent Date column width": "92"
      - rowgroup:
        - row "text SUB-45368 Not Assigned pejinigorqa@gmail.com Submission Alert 1748188542392 New Submissions + 05/25/25, 05:55 PM":
          - rowheader "text"
          - gridcell "SUB-45368"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "pejinigorqa@gmail.com"
          - gridcell "Submission Alert 1748188542392"
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/25/25, 05:55 PM"
        - row "SUB-45367 Not Assigned pejinigorqa@gmail.com Check Alert 1748188278788 New Submissions + 05/25/25, 05:51 PM":
          - rowheader
          - gridcell "SUB-45367"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "pejinigorqa@gmail.com"
          - gridcell "Check Alert 1748188278788"
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/25/25, 05:51 PM"
        - row "SUB-45361 Not Assigned pejinigorqa@gmail.com Test New Submissions + 05/24/25, 12:16 PM":
          - rowheader
          - gridcell "SUB-45361"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "pejinigorqa@gmail.com"
          - gridcell "Test"
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/24/25, 12:16 PM"
        - row "text text text text SUB-45360 Not Assigned pejinigor@gmail.com Test 2 Tagged + 05/23/25, 09:59 PM":
          - rowheader "text text text text"
          - gridcell "SUB-45360"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "pejinigor@gmail.com"
          - gridcell "Test 2"
          - gridcell "Tagged"
          - gridcell "+":
            - button "+"
          - gridcell "05/23/25, 09:59 PM"
        - row "text text text text text SUB-45359 PCL - Primary Construction Liability pejinigor@gmail.com Testing Tagged + 05/23/25, 12:28 PM":
          - rowheader "text text text text text"
          - gridcell "SUB-45359"
          - gridcell "PCL - Primary Construction Liability":
            - combobox:
              - option "Not Assigned"
              - option "PCL - Primary Construction Liability" [selected]
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "pejinigor@gmail.com"
          - gridcell "Testing"
          - gridcell "Tagged"
          - gridcell "+":
            - button "+"
          - gridcell "05/23/25, 12:28 PM"
        - row "text text SUB-45354 PCL - Primary Construction Liability lealrdoliana@gmail.com subm-522 In Clearance + 05/22/25, 02:33 PM":
          - rowheader "text text"
          - gridcell "SUB-45354"
          - gridcell "PCL - Primary Construction Liability":
            - combobox:
              - option "Not Assigned"
              - option "PCL - Primary Construction Liability" [selected]
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "lealrdoliana@gmail.com"
          - gridcell "subm-522"
          - gridcell "In Clearance"
          - gridcell "+":
            - button "+"
          - gridcell "05/22/25, 02:33 PM"
        - row "text text SUB-45352 PCL - Primary Construction Liability lealrdoliana@gmail.com TEST Tagged + 05/21/25, 06:25 PM":
          - rowheader "text text"
          - gridcell "SUB-45352"
          - gridcell "PCL - Primary Construction Liability":
            - combobox:
              - option "Not Assigned"
              - option "PCL - Primary Construction Liability" [selected]
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "lealrdoliana@gmail.com"
          - gridcell "TEST"
          - gridcell "Tagged"
          - gridcell "+":
            - button "+"
          - gridcell "05/21/25, 06:25 PM"
        - 'row "SUB-45351 Not Assigned submissions.dev@uplandcapgroup.onmicrosoft.com FW: L&M Holdings Inc(C:USPCL0152924 & USXCL0052424) - Renewal Sub - Exp. 4/29/25 New Submissions + 05/19/25, 10:25 PM"':
          - rowheader
          - gridcell "SUB-45351"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "submissions.dev@uplandcapgroup.onmicrosoft.com"
          - 'gridcell "FW: L&M Holdings Inc(C:USPCL0152924 & USXCL0052424) - Renewal Sub - Exp. 4/29/25"'
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/19/25, 10:25 PM"
        - row "SUB-45350 Not Assigned lealrdoliana@gmail.com test New Submissions + 05/19/25, 09:35 PM":
          - rowheader
          - gridcell "SUB-45350"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "lealrdoliana@gmail.com"
          - gridcell "test"
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/19/25, 09:35 PM"
        - row "SUB-45348 XPE - Excess Public Entity lealrdoliana@gmail.com ---- Tagged + 05/16/25, 08:22 PM":
          - rowheader
          - gridcell "SUB-45348"
          - gridcell "XPE - Excess Public Entity":
            - combobox:
              - option "Not Assigned"
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity" [selected]
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "lealrdoliana@gmail.com"
          - gridcell "----"
          - gridcell "Tagged"
          - gridcell "+":
            - button "+"
          - gridcell "05/16/25, 08:22 PM"
        - row "text SUB-45347 PPR - Primary Product Recall lealrdoliana@gmail.com T3 Waiting Information + 05/15/25, 05:03 PM":
          - rowheader "text"
          - gridcell "SUB-45347"
          - gridcell "PPR - Primary Product Recall":
            - combobox:
              - option "Not Assigned"
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall" [selected]
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "lealrdoliana@gmail.com"
          - gridcell "T3"
          - gridcell "Waiting Information"
          - gridcell "+":
            - button "+"
          - gridcell "05/15/25, 05:03 PM"
        - row "text SUB-45341 Not Assigned dleal@uplandcapgroup.com Test In Clearance + 05/14/25, 06:08 PM":
          - rowheader "text"
          - gridcell "SUB-45341"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "dleal@uplandcapgroup.com"
          - gridcell "Test"
          - gridcell "In Clearance"
          - gridcell "+":
            - button "+"
          - gridcell "05/14/25, 06:08 PM"
        - row "text SUB-45340 PCL - Primary Construction Liability dleal@uplandcapgroup.com Test In Clearance + 05/14/25, 06:02 PM":
          - rowheader "text"
          - gridcell "SUB-45340"
          - gridcell "PCL - Primary Construction Liability":
            - combobox:
              - option "Not Assigned"
              - option "PCL - Primary Construction Liability" [selected]
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "dleal@uplandcapgroup.com"
          - gridcell "Test"
          - gridcell "In Clearance"
          - gridcell "+":
            - button "+"
          - gridcell "05/14/25, 06:02 PM"
        - row "text text SUB-45339 XPR - Excess Product Recall lealrdoliana@gmail.com Test SR In Clearance + 05/14/25, 05:33 PM":
          - rowheader "text text"
          - gridcell "SUB-45339"
          - gridcell "XPR - Excess Product Recall":
            - combobox:
              - option "Not Assigned"
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall" [selected]
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "lealrdoliana@gmail.com"
          - gridcell "Test SR"
          - gridcell "In Clearance"
          - gridcell "+":
            - button "+"
          - gridcell "05/14/25, 05:33 PM"
        - row "text text SUB-45338 XCL - Excess Construction Liability dleal@uplandcapgroup.com SH Tagged + 05/14/25, 03:42 PM":
          - rowheader "text text"
          - gridcell "SUB-45338"
          - gridcell "XCL - Excess Construction Liability":
            - combobox:
              - option "Not Assigned"
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability" [selected]
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "dleal@uplandcapgroup.com"
          - gridcell "SH"
          - gridcell "Tagged"
          - gridcell "+":
            - button "+"
          - gridcell "05/14/25, 03:42 PM"
        - 'row "SUB-45337 Not Assigned submissions.dev@uplandcapgroup.onmicrosoft.com FW: Modern Protective Coatings, Inc. - 05/31/25 New Submissions + 05/13/25, 02:19 AM"':
          - rowheader
          - gridcell "SUB-45337"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "submissions.dev@uplandcapgroup.onmicrosoft.com"
          - 'gridcell "FW: Modern Protective Coatings, Inc. - 05/31/25"'
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/13/25, 02:19 AM"
        - row "text text SUB-45336 PCL - Primary Construction Liability mwaldrum@uplandcapgroup.com MissyW Test 05122025 Tagged + 05/12/25, 08:13 PM":
          - rowheader "text text"
          - gridcell "SUB-45336"
          - gridcell "PCL - Primary Construction Liability":
            - combobox:
              - option "Not Assigned"
              - option "PCL - Primary Construction Liability" [selected]
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "mwaldrum@uplandcapgroup.com"
          - gridcell "MissyW Test 05122025"
          - gridcell "Tagged"
          - gridcell "+":
            - button "+"
          - gridcell "05/12/25, 08:13 PM"
        - row "text SUB-45335 PCL - Primary Construction Liability dleal@uplandcapgroup.com No Email Subject Tagged + 05/12/25, 06:08 PM":
          - rowheader "text"
          - gridcell "SUB-45335"
          - gridcell "PCL - Primary Construction Liability":
            - combobox:
              - option "Not Assigned"
              - option "PCL - Primary Construction Liability" [selected]
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "dleal@uplandcapgroup.com"
          - gridcell "No Email Subject"
          - gridcell "Tagged"
          - gridcell "+":
            - button "+"
          - gridcell "05/12/25, 06:08 PM"
        - row "SUB-45334 Not Assigned dleal@uplandcapgroup.com REGR05 – System Alert New Submissions + 05/05/25, 08:57 PM":
          - rowheader
          - gridcell "SUB-45334"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "dleal@uplandcapgroup.com"
          - gridcell "REGR05 – System Alert"
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/05/25, 08:57 PM"
        - row "SUB-45333 Not Assigned tracy.andrews@amwins.com Trucking Investments Inc - Effective 8/1/2025 New Submissions + 05/05/25, 04:39 PM":
          - rowheader
          - gridcell "SUB-45333"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "tracy.andrews@amwins.com"
          - gridcell "Trucking Investments Inc - Effective 8/1/2025"
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/05/25, 04:39 PM"
        - 'row "SUB-45332 Not Assigned edwyer@crcgroup.com Ybor Bricks Restaurant LLC - Eff Date:05/12/2025 -- CRC#13888520 #secure# New Submissions + 05/05/25, 04:39 PM"':
          - rowheader
          - gridcell "SUB-45332"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "edwyer@crcgroup.com"
          - 'gridcell "Ybor Bricks Restaurant LLC - Eff Date:05/12/2025 -- CRC#13888520 #secure#"'
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/05/25, 04:39 PM"
        - row "SUB-45331 Not Assigned jack.newman@rtspecialty.com Submission - Ancestral Supplements, LLC - Effective 7/26/2025 New Submissions + 05/05/25, 04:34 PM":
          - rowheader
          - gridcell "SUB-45331"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "jack.newman@rtspecialty.com"
          - gridcell "Submission - Ancestral Supplements, LLC - Effective 7/26/2025"
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/05/25, 04:34 PM"
        - 'row "SUB-45330 Not Assigned molly.manning@rtspecialty.com NEW SUBMISSION: Thackray Crane Rental, Inc - Eff. 6/30/2025 New Submissions + 05/05/25, 04:33 PM"':
          - rowheader
          - gridcell "SUB-45330"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "molly.manning@rtspecialty.com"
          - 'gridcell "NEW SUBMISSION: Thackray Crane Rental, Inc - Eff. 6/30/2025"'
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/05/25, 04:33 PM"
        - row "SUB-45329 Not Assigned jmartin@crcgroup.com Submission# 13805602 /USXTL0634724 W G Moving / Eff 5/12/25 New Submissions + 05/05/25, 04:31 PM":
          - rowheader
          - gridcell "SUB-45329"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "jmartin@crcgroup.com"
          - gridcell "Submission# 13805602 /USXTL0634724 W G Moving / Eff 5/12/25"
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/05/25, 04:31 PM"
        - 'row "SUB-45328 Not Assigned kellyle@crcgroup.com XS - X-Mail Corp dba South Gate Trucking - Eff Date:07/30/2025 -- CRC#13729021 #secure# New Submissions + 05/05/25, 04:31 PM"':
          - rowheader
          - gridcell "SUB-45328"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "kellyle@crcgroup.com"
          - 'gridcell "XS - X-Mail Corp dba South Gate Trucking - Eff Date:07/30/2025 -- CRC#13729021 #secure#"'
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/05/25, 04:31 PM"
        - row "SUB-45327 Not Assigned jeff_webb@rpsins.com R&T Trucking LLC - QUOTE REQUEST New Submissions + 05/05/25, 04:28 PM":
          - rowheader
          - gridcell "SUB-45327"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "jeff_webb@rpsins.com"
          - gridcell "R&T Trucking LLC - QUOTE REQUEST"
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/05/25, 04:28 PM"
        - 'row "SUB-45326 Not Assigned sadam@uplandcapgroup.com FW: Panther Management - MPL renewal submission - Exp. 6/18/25 New Submissions + 05/05/25, 04:25 PM"':
          - rowheader
          - gridcell "SUB-45326"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "sadam@uplandcapgroup.com"
          - 'gridcell "FW: Panther Management - MPL renewal submission - Exp. 6/18/25"'
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/05/25, 04:25 PM"
        - 'row "SUB-45325 Not Assigned jdejesso@uplandcapgroup.com FW: Attico Rooftop, LLC, File # BR219266-01 New Submissions + 05/05/25, 04:18 PM"':
          - rowheader
          - gridcell "SUB-45325"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "jdejesso@uplandcapgroup.com"
          - 'gridcell "FW: Attico Rooftop, LLC, File # BR219266-01"'
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/05/25, 04:18 PM"
        - 'row "SUB-45324 Not Assigned mhoeflin@uplandcapgroup.com FW: Saulsbury Industries - MORE INFO New Submissions + 05/05/25, 04:14 PM"':
          - rowheader
          - gridcell "SUB-45324"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "mhoeflin@uplandcapgroup.com"
          - 'gridcell "FW: Saulsbury Industries - MORE INFO"'
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/05/25, 04:14 PM"
        - 'row "SUB-45323 Not Assigned colin_greene@rpsins.com RUSH: New Business Submission: Rhodes Properties & Development, LLC - [SYS*REF#7840237] New Submissions + 05/05/25, 04:14 PM"':
          - rowheader
          - gridcell "SUB-45323"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "colin_greene@rpsins.com"
          - 'gridcell "RUSH: New Business Submission: Rhodes Properties & Development, LLC - [SYS*REF#7840237]"'
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/05/25, 04:14 PM"
        - row "SUB-45322 Not Assigned alex_cossio@rpsins.com Snow Rd Subdivision Receivership, LLC New Submissions + 05/05/25, 04:13 PM":
          - rowheader
          - gridcell "SUB-45322"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "alex_cossio@rpsins.com"
          - gridcell "Snow Rd Subdivision Receivership, LLC"
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/05/25, 04:13 PM"
        - row "SUB-45321 Not Assigned madison.melton@amwins.com Senergy Builders, LLC - Submission New Submissions + 05/05/25, 04:11 PM":
          - rowheader
          - gridcell "SUB-45321"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "madison.melton@amwins.com"
          - gridcell "Senergy Builders, LLC - Submission"
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/05/25, 04:11 PM"
        - row "SUB-45320 Not Assigned jeff_webb@rpsins.com JFO Hauling LLC - [SYS*REF#7836890] New Submissions + 05/05/25, 04:10 PM":
          - rowheader
          - gridcell "SUB-45320"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "jeff_webb@rpsins.com"
          - gridcell "JFO Hauling LLC - [SYS*REF#7836890]"
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/05/25, 04:10 PM"
        - 'row "SUB-45319 Not Assigned mhoeflin@uplandcapgroup.com FW: Modern Protective Coatings, Inc. - 05/31/25 New Submissions + 05/05/25, 04:07 PM"':
          - rowheader
          - gridcell "SUB-45319"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "mhoeflin@uplandcapgroup.com"
          - 'gridcell "FW: Modern Protective Coatings, Inc. - 05/31/25"'
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/05/25, 04:07 PM"
        - row "SUB-45318 Not Assigned harry.rubenstein@rtspecialty.com BC Rincon Construction Inc - New XS Sub - Eff 8/1/25 // CUSXU2300000000 New Submissions + 05/05/25, 04:05 PM":
          - rowheader
          - gridcell "SUB-45318"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "harry.rubenstein@rtspecialty.com"
          - gridcell "BC Rincon Construction Inc - New XS Sub - Eff 8/1/25 // CUSXU2300000000"
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/05/25, 04:05 PM"
        - 'row "SUB-45317 Not Assigned jlevy@crcgroup.com Tutor Perini Corporation - Eff Date:05/31/2025 -- CRC#13544047 #secure# New Submissions + 05/05/25, 04:03 PM"':
          - rowheader
          - gridcell "SUB-45317"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "jlevy@crcgroup.com"
          - 'gridcell "Tutor Perini Corporation - Eff Date:05/31/2025 -- CRC#13544047 #secure#"'
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/05/25, 04:03 PM"
        - row "SUB-45316 Not Assigned jason.lukens@amwins.com EM Trading LLC - Submission New Submissions + 05/05/25, 04:03 PM":
          - rowheader
          - gridcell "SUB-45316"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "jason.lukens@amwins.com"
          - gridcell "EM Trading LLC - Submission"
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/05/25, 04:03 PM"
        - 'row "SUB-45315 Not Assigned min.kim@amwins.com Effective 6/1: Intrepid Cohort 1 LLC New Submissions + 05/05/25, 04:03 PM"':
          - rowheader
          - gridcell "SUB-45315"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "min.kim@amwins.com"
          - 'gridcell "Effective 6/1: Intrepid Cohort 1 LLC"'
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/05/25, 04:03 PM"
        - 'row "SUB-45314 Not Assigned aducett@brcins.com Attico Rooftop, LLC, File # BR219266-02 New Submissions + 05/05/25, 03:59 PM"':
          - rowheader
          - gridcell "SUB-45314"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "aducett@brcins.com"
          - 'gridcell "Attico Rooftop, LLC, File # BR219266-02"'
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/05/25, 03:59 PM"
        - row "SUB-45313 Not Assigned sabina.brzozowski@amwins.com Crossfire Aggregate Services, LLC - Umbrella Submission - 5.16.2025-5.16.2026 New Submissions + 05/05/25, 03:56 PM":
          - rowheader
          - gridcell "SUB-45313"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "sabina.brzozowski@amwins.com"
          - gridcell "Crossfire Aggregate Services, LLC - Umbrella Submission - 5.16.2025-5.16.2026"
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/05/25, 03:56 PM"
        - 'row "SUB-45310 Not Assigned aducett@brcins.com Attico Rooftop, LLC, File # BR219266-01 New Submissions + 05/05/25, 03:55 PM"':
          - rowheader
          - gridcell "SUB-45310"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "aducett@brcins.com"
          - 'gridcell "Attico Rooftop, LLC, File # BR219266-01"'
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/05/25, 03:55 PM"
        - row "SUB-45306 Not Assigned reghann.kosar@amwins.com BB & I LLC - Submission New Submissions + 05/05/25, 03:53 PM":
          - rowheader
          - gridcell "SUB-45306"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "reghann.kosar@amwins.com"
          - gridcell "BB & I LLC - Submission"
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/05/25, 03:53 PM"
        - 'row "SUB-45312 Not Assigned cfraley@crcgroup.com Sack Roofing Inc - Eff Date:05/10/2025 -- CRC#13689833 #secure# New Submissions + 05/05/25, 03:52 PM"':
          - rowheader
          - gridcell "SUB-45312"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "cfraley@crcgroup.com"
          - 'gridcell "Sack Roofing Inc - Eff Date:05/10/2025 -- CRC#13689833 #secure#"'
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/05/25, 03:52 PM"
        - 'row "SUB-45311 Not Assigned mbundy@crcgroup.com RE: Safe Chem LLC - [SYS*REF#13206573] New Submissions + 05/05/25, 03:49 PM"':
          - rowheader
          - gridcell "SUB-45311"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "mbundy@crcgroup.com"
          - 'gridcell "RE: Safe Chem LLC - [SYS*REF#13206573]"'
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/05/25, 03:49 PM"
        - row "SUB-45307 Not Assigned mburger@uplandcapgroup.com Test Case 15 attachment and subject New Submissions + 05/05/25, 03:36 PM":
          - rowheader
          - gridcell "SUB-45307"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "mburger@uplandcapgroup.com"
          - gridcell "Test Case 15 attachment and subject"
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/05/25, 03:36 PM"
        - row "SUB-45309 Not Assigned mburger@uplandcapgroup.com Test Case 1 - Plain Text Poem New Submissions + 05/05/25, 03:35 PM":
          - rowheader
          - gridcell "SUB-45309"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "mburger@uplandcapgroup.com"
          - gridcell "Test Case 1 - Plain Text Poem"
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/05/25, 03:35 PM"
        - row "SUB-45308 Not Assigned mburger@uplandcapgroup.com Test Case 29 - Crazy PDF names New Submissions + 05/05/25, 03:35 PM":
          - rowheader
          - gridcell "SUB-45308"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "mburger@uplandcapgroup.com"
          - gridcell "Test Case 29 - Crazy PDF names"
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/05/25, 03:35 PM"
        - row "SUB-45304 Not Assigned brendan.roberson@rtspecialty.com Florida Framing LLC New Submissions + 05/05/25, 03:28 PM":
          - rowheader
          - gridcell "SUB-45304"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "brendan.roberson@rtspecialty.com"
          - gridcell "Florida Framing LLC"
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/05/25, 03:28 PM"
        - 'row "SUB-45303 Not Assigned kreier@crcgroup.com Charging Eagle Enterprises, LLC - 7/11/2025 NEW SUBMISSION -- CRC#13628596 #secure# New Submissions + 05/05/25, 03:15 PM"':
          - rowheader
          - gridcell "SUB-45303"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "kreier@crcgroup.com"
          - 'gridcell "Charging Eagle Enterprises, LLC - 7/11/2025 NEW SUBMISSION -- CRC#13628596 #secure#"'
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/05/25, 03:15 PM"
        - 'row "SUB-45302 Not Assigned laanderson@crcgroup.com Brooks & Freund, LLC - Eff Date:08/01/2025 -- CRC#13835320 #secure# New Submissions + 05/05/25, 03:10 PM"':
          - rowheader
          - gridcell "SUB-45302"
          - gridcell "Not Assigned":
            - combobox:
              - option "Not Assigned" [selected]
              - option "PCL - Primary Construction Liability"
              - option "PGL - General Liability"
              - option "PPL - Primary Professional Liability"
              - option "PPR - Primary Product Recall"
              - option "XCL - Excess Construction Liability"
              - option "XCY - Excess Cyber Liability"
              - option "XGL - Excess General Liability"
              - option "XPE - Excess Public Entity"
              - option "XPL - Excess Professional Liability"
              - option "XPR - Excess Product Recall"
              - option "XSL - Excess Liability"
              - option "XTL - Excess Transportation Liability"
          - gridcell "laanderson@crcgroup.com"
          - 'gridcell "Brooks & Freund, LLC - Eff Date:08/01/2025 -- CRC#13835320 #secure#"'
          - gridcell "New Submissions"
          - gridcell "+":
            - button "+"
          - gridcell "05/05/25, 03:10 PM"
    - button "Previous" [disabled]
    - button "Next"
    - text: "Page: 1 / 41"
- status
```

# Test source

```ts
   23 | );
   24 | oauth2Client.setCredentials({ refresh_token: GMAIL_REFRESH_TOKEN });
   25 | const gmail = google.gmail({ version: 'v1', auth: oauth2Client });
   26 |
   27 | function generateRandomSubject() {
   28 |   const words = ['Update', 'Submission', 'Alert', 'Check', 'AutoMsg', 'Notice'];
   29 |   const pick = () => words[Math.floor(Math.random() * words.length)];
   30 |   return `${pick()} ${pick()} ${Date.now()}`;
   31 | }
   32 |
   33 | test('📨 Send email & verify in Salesforce', async ({ page }) => {
   34 |   test.setTimeout(120_000);
   35 |   const subject = generateRandomSubject();
   36 |   const message = [
   37 |     `From: ${SENDER_EMAIL}`,
   38 |     `To: ${RECEIVER_EMAIL}`,
   39 |     `Subject: ${subject}`,
   40 |     '',
   41 |     `Automated email sent at ${new Date().toLocaleString()}`,
   42 |   ].join('\n');
   43 |
   44 |   const encodedMessage = Buffer.from(message)
   45 |     .toString('base64')
   46 |     .replace(/\+/g, '-')
   47 |     .replace(/\//g, '_')
   48 |     .replace(/=+$/, '');
   49 |
   50 |   console.log('📤 Sending email with subject:', subject);
   51 |   await gmail.users.messages.send({
   52 |     userId: 'me',
   53 |     requestBody: { raw: encodedMessage },
   54 |   });
   55 |
   56 |   console.log('🌐 Navigating to Salesforce...');
   57 |   await page.goto(config.url);
   58 |   await page.getByRole('textbox', { name: 'Username' }).fill(config.username);
   59 |   await page.getByRole('textbox', { name: 'Password' }).fill(config.password);
   60 |   await page.getByRole('button', { name: 'Log In to Sandbox' }).click();
   61 |   await page.waitForTimeout(4000);
   62 |
   63 |   console.log('⏳ Waiting for new email to appear...');
   64 |   const timeout = 60_000;
   65 |   const pollInterval = 5_000;
   66 |   const start = Date.now();
   67 |   let found = false;
   68 |
   69 |   while (Date.now() - start < timeout) {
   70 |     await page.getByRole('button', { name: 'Sort by: Sent Date' }).click();
   71 |     await page.waitForTimeout(500);
   72 |     await page.getByRole('button', { name: 'Sort by: Sent Date' }).click();
   73 |     await page.waitForTimeout(1000);
   74 |
   75 |     const manualSubmissionNumber = process.env.MANUAL_SUBMISSION || ''; // Optional fallback
   76 |
   77 | let found = false;
   78 | let row;
   79 |
   80 | if (manualSubmissionNumber) {
   81 |   // ➕ Use manually provided Submission number
   82 |   console.log(`🔎 Using manual submission: ${manualSubmissionNumber}`);
   83 |   row = page.locator('tr', { hasText: manualSubmissionNumber });
   84 |   if (await row.first().isVisible()) {
   85 |     console.log('✅ Found row for manual submission');
   86 |     await row.first().click();
   87 |     found = true;
   88 |   } else {
   89 |     throw new Error(`❌ Could not find row with manual submission: ${manualSubmissionNumber}`);
   90 |   }
   91 |
   92 | } else {
   93 |   // 🔁 Auto-mode: search by subject from sent email
   94 |   const timeout = 60000;
   95 |   const pollInterval = 3000;
   96 |   const start = Date.now();
   97 |
   98 |   while (Date.now() - start < timeout) {
   99 |     await page.getByRole('button', { name: 'Sort by: Sent Date' }).click();
  100 |     await page.waitForTimeout(500);
  101 |     await page.getByRole('button', { name: 'Sort by: Sent Date' }).click();
  102 |     await page.waitForTimeout(1000);
  103 |
  104 |     row = page.locator('tr', { hasText: subject });
  105 |     if (await row.first().isVisible()) {
  106 |       console.log('✅ Found the email row by subject');
  107 |       await row.first().click();
  108 |       found = true;
  109 |       break;
  110 |     }
  111 |
  112 |     console.log('⏳ Email not found yet... retrying');
  113 |     await page.reload();
  114 |     await page.waitForTimeout(pollInterval);
  115 |   }
  116 |
  117 |   if (!found) {
  118 |     throw new Error(`❌ Email with subject "${subject}" not found`);
  119 |   }
  120 | }
  121 |
  122 | // 🎯 Now click inside the submission details (gridcell)
> 123 | await page.getByRole('gridcell', { name: /SUB-\d+/ }).locator('lightning-formatted-text').click();
      |                                                                                           ^ Error: locator.click: Error: strict mode violation: getByRole('gridcell', { name: /SUB-\d+/ }).locator('lightning-formatted-text') resolved to 50 elements:
  124 |
  125 |     console.log('🔁 Email not found yet, retrying...');
  126 |     await page.reload();
  127 |     await page.waitForTimeout(pollInterval);
  128 |   }
  129 |
  130 |   if (!found) {
  131 |     throw new Error(`❌ Email with subject "${subject}" did not appear in time.`);
  132 |   }
  133 |
  134 |   await page.waitForTimeout(2000);
  135 |   for (let i = 0; i < 5; i++) {
  136 |     await page.mouse.wheel(0, 200);
  137 |     await page.waitForTimeout(700);
  138 |   }
  139 |
  140 |   await page.getByRole('button', { name: 'Edit From Address' }).click();
  141 |   await page.waitForTimeout(1000);
  142 |   for (let i = 0; i < 4; i++) {
  143 |     await page.mouse.wheel(0, -200);
  144 |     await page.waitForTimeout(2000);
  145 |   }
  146 |
  147 |   await page.getByLabel('Available').getByText('Urgent').click();
  148 |     //await page.getByLabel('Available').getByText('Renewal').click();
  149 |       //await page.getByLabel('Available').getByText('Program Flip').click()
  150 |        //await page.getByLabel('Available').getByText('Missing Info').click()
  151 |        //await page.getByLabel('Available').getByText('Additional Info').click();
  152 |
  153 |     //await page.getByLabel('Available').getByText('NY').click()
  154 |   await page.waitForTimeout(1000);
  155 |   await page.getByRole('button', { name: 'Move to Chosen Move selection' }).click();
  156 |   await page.waitForTimeout(1000);
  157 |   await page.getByRole('button', { name: 'Save' }).click();
  158 |   await page.waitForTimeout(1000);
  159 |
  160 |   for (let i = 0; i < 4; i++) {
  161 |     await page.mouse.wheel(0, -200);
  162 |     await page.waitForTimeout(700);
  163 |   }
  164 |
  165 |   const dropdownButtons = page.locator('button[role="combobox"]');
  166 |   const count = await dropdownButtons.count();
  167 |
  168 |   let dropdownButton;
  169 |   for (let i = 0; i < count; i++) {
  170 |     const current = dropdownButtons.nth(i);
  171 |     const labelSpan = current.locator('span[part="input-button-value"]');
  172 |     const value = await labelSpan.textContent();
  173 |
  174 |     if (value?.includes('Line of Business') || value?.includes('PCL') || value?.includes('Default')) {
  175 |       dropdownButton = current;
  176 |       break;
  177 |     }
  178 |   }
  179 |
  180 |   if (!dropdownButton) {
  181 |     throw new Error('Dropdown button for Line of Business not found');
  182 |   }
  183 |
  184 |   const selectedValue = await dropdownButton.locator('span[part="input-button-value"]').textContent();
  185 |   const expectedValue = 'PCL - Primary Construction Liability';
  186 |
  187 |   if (selectedValue?.trim() !== expectedValue) {
  188 |     await dropdownButton.click();
  189 |     await page.waitForSelector('[role="listbox"]');
  190 |     const optionLocator = page.locator('[role="option"]', { hasText: expectedValue });
  191 |     await optionLocator.first().click();
  192 |     await page.waitForTimeout(1000);
  193 |   }
  194 |
  195 |   await page.getByRole('button', { name: 'Days Exceeded' }).click();
  196 |   await page.waitForTimeout(3000);
  197 |
  198 |   const acceptButton = page.getByRole('button', { name: 'Accept' });
  199 |   const confirmButton = page.getByRole('button', { name: 'Confirm' });
  200 |
  201 |   try {
  202 |     await Promise.race([
  203 |       acceptButton.waitFor({ timeout: 2000 }),
  204 |       confirmButton.waitFor({ timeout: 2000 }),
  205 |     ]);
  206 |
  207 |     if (await acceptButton.isVisible()) {
  208 |       await acceptButton.click();
  209 |       console.log('✅ Clicked "Accept" button');
  210 |     } else if (await confirmButton.isVisible()) {
  211 |       await confirmButton.click();
  212 |       console.log('✅ Clicked "Confirm" button');
  213 |     } else {
  214 |       throw new Error('❌ Neither "Accept" nor "Confirm" button is visible');
  215 |     }
  216 |   } catch (error) {
  217 |     console.error('❌ Failed to click Accept or Confirm:', error);
  218 |     throw error;
  219 |   }
  220 |
  221 |   await page.waitForTimeout(2000);
  222 |   for (let i = 0; i < 2; i++) {
  223 |     await page.mouse.wheel(0, 600);
```