function confirmlink(linkname) {
   if (confirm("Are you sure you want to jump to " + linkname + "?"))
        location = linkname;
}

function displayinfo() {
  alert("my name is " + myname + " the class is an " + classdescription + " the date is currently " + thedate);
}
myname = "Jose";
classdescription ="introduction to Javascript";
thedate = "06/2021";

