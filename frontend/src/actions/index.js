import * as api from "../api";

export const fetchbanner = () => async (dispatch) => {
  try {
    const { data } = await api.getBanner();
    console.log(data);
    data.pp.map((item) => {
      item.MImage.data = new Buffer.from(item.MImage.data).toString("base64");
      item.PImage.data = new Buffer.from(item.PImage.data).toString("base64");
      data.yy.push(item);
    });
    data.ff.map((item) => {
      item.FImage.data = new Buffer.from(item.FImage.data).toString("base64");
    });
    data.aa.map((item) => {
      item.AImage.data = new Buffer.from(item.AImage.data).toString("base64");
    });
    if (data.wl.list) {
      data.wl.list.map((item) => {
        item.PImage.data = new Buffer.from(item.PImage.data).toString("base64");
      });
    }

    dispatch({ type: "fetchbanner", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createUserAction = (data, navi) => async (dispatch) => {
  try {
    const resp = await api.postUser(data);
    if (resp.status === 201) {
      const { profile } = resp.data;
      console.log(profile);
      localStorage.setItem("imdbProfile", JSON.stringify(profile));
      await dispatch({ type: "userActive", payload: profile });
      navi("../");
    }
  } catch (error) {
    console.log(error);
  }
};

export const loginUserAction = (data, navi) => async (dispatch) => {
  try {
    const resp = await api.loginUser(data);
    if (resp.status === 201) {
      const { existedUser } = resp.data;
      console.log(existedUser);
      localStorage.setItem("imdbProfile", JSON.stringify(existedUser));
      await dispatch({ type: "userActive", payload: existedUser });
      navi("../");
    }
  } catch (error) {
    console.log(error);
  }
};

export const addWatchAction = (data) => async (dispatch) => {
  try {
    const dat = {
      id: data.id._id,
    };
    const resp = await api.addWatch(dat);
    if (resp.status === 200) {
      await dispatch({ type: "userWatchlist", payload: data.id });
    }
    if (resp.status === 204) {
      await dispatch({ type: "userWatchlist", payload: data.id });
    }
  } catch (error) {
    console.log(error);
  }
};
