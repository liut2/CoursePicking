import requests, re, csv
from bs4 import BeautifulSoup

depts = ['AFAM','AMMU','AMST','ARBC','ARCN','ARTH','ASST','ASTR','BIOL','CHEM','CHIN','CAMS','CLAS','CGSC','CS','CCST','DANC','ECON','EDUC','ENGL','ENTS','EUST','FRST','FREN','GEOL','GERM','GRK','HEBR','HIST','IDSC','JAPN','LATN','LTAM','LING','LCST','MATH','MARS','MUSC','NEUR','PHIL','PE','PHYS','POSC','PSYC','RELG','RUSS','SOAN','SPAN','COGSC','DANCE','ARTS','THEA','WGST']

urlbase = "http://apps.carleton.edu/campus/registrar/schedule/enroll/?term=15WI&subject=%s"

def get_course_data_from_course(course):
  title = re.sub(r'<h3 class="title">.*?<span.*?</span> (.*) <span.*?</span>.*</h3>', 
                 r'\1', 
                 course.find(class_='title').__repr__())
  instructor = course.find(class_='faculty').text.replace("\n","")

  return title,instructor

def get_dept_courses(dept):
  r = requests.get(urlbase % dept)
  s = BeautifulSoup(r.content)

  courses = s.find_all(class_='course')
  course_data = map(get_course_data_from_course, courses)

  return course_data

def main():
  with open("carleton_courses.csv",'w') as f:
    e = csv.writer(f)
    e.writerow(["Dept", "CourseName", "Instructor"])
    for dept in depts:
      courses = get_dept_courses(dept)
      [e.writerow([dept, i[0], i[1]]) for i in courses]
 

if __name__ == '__main__':
  main()