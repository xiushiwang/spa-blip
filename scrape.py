import requests
import random
import re
from bs4 import BeautifulSoup
# import beautifulsoup4
import urllib.request

# measurement = ["cup", "cups", "tablespoon", "tablespoons", "teaspoon", "teaspoons", "spoon", "cloves", "jars", "pound",
#                "pinch", "links", "link"]


class OTC_Search:
    search_base_url = "http://search.jsm-db.info/sp_en/result.php?search=%s"
    image_url="http://search.jsm-db.info/sp_en/"


    def search_medicines(self, keywords):
        search_url = self.search_base_url % (keywords.replace(' ', '+'))
        page_html = requests.get(search_url)
        page_graph = BeautifulSoup(page_html.content)
        results_array=[]
        results={}
        # h=page_graph.find_all('p', {'class', "number"})
        # print("Total Results",h.number)
        c=0
        for i in page_graph.find_all('p', {'class', "number"}):
            # print("Nutrients")
            c+=1
            if c==2:
                results['total']=i.text
            print("Total Results",i.text)

        for i in page_graph.find_all('li', {'class', "item"}):
            results = {}
            for j in i.find_all('p', {'class', "name"}):
                print("inside",j.text)
                results['name']=j.text
            # print("Nutrients")
            for j in i.find_all('p', {'class', "summary"}):
                results['summary']=j.text
                print("summ",j.text)
            for j in i.find_all('p', {'class', "maker"}):
                results["manufacturer"]=j.text
                print("maker",j.text)
            for j in i.find_all('p', {'class', "amount"}):
                results['quantity']=j.text
                print("amount",j.text)
            for j in i.find_all('p', {'class', "price"}):
                results['price']=j.text
                print("price",j.text)
            for j in i.find_all('div', {'class', "img_wrap"}):
                # print("Nutrients")
                pattern = re.compile(r'(<img src=)(\")(.*)\"')
                nutr_link_url = self.image_url + pattern.search(str(i.img)).group(3)
                results['img_url']=nutr_link_url
                print(nutr_link_url)
            # place_holder=results.deepcopy()
            results_array.append(results)
        # # for i in page_graph.find_all('p', {'class', "price"}):
        # #     # print("Nutrients")
        # #     print(i.text)
        # #     for j in i.find_all('p', {'class', "summary"}):
        # #     # print("Nutrients")
        # #         print("Summary",j.text)
        # # for i in page_graph.find_all('p', {'class', "price"}):
        # #     # print("Nutrients")
        # #     print(i.text)
        # for i in page_graph.find_all('div', {'class', "img_wrap"}):
        #     # print("Nutrients")
        #     pattern = re.compile(r'(<img src=)(\")(.*)\"')
        #     nutr_link_url = self.image_url+pattern.search(str(i.img)).group(3)
        #     print(nutr_link_url)
        #     print(i.img)
        # # print(page_graph)
        return results_array

    def download_image(url):
        print("[INFO] downloading {}".format(url))
        name = random.randrange(1, 100)
        fullname = str(name) + ".jpg"
        name = str(url.split('/')[-1])
        urllib.request.urlretrieve(url, fullname)

# med = OTC_Search()
# print("Enter medicine detail")
# inp=input()
# med = med.search_medicines(inp)
# print(med)
# results = rf.scrape_recipe(meat_lasagna)

# import fractions
# fraction_str = "1 1/2"
# fraction_obj = sum(map(fractions.Fraction, fraction_str.split()))
# print(float(fraction_obj))
# fractions.Fraction.from_float(float(fraction_obj)/2).limit_denominator()
