import sys, os
INTERP = os.path.join(os.environ['HOME'], 'digitalcanvas.jmulhall.com', 'bin', 'python')
if sys.executable != INTERP:
    os.execl(INTERP, INTERP, *sys.argv)
sys.path.append(os.getcwd())

sys.path.append('digitalcanvas')
from digitalcanvas.app import app as application
