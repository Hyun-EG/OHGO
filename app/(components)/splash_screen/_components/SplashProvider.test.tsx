import React from "react";

import { render, screen, waitFor, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import SplashProvider from "./SplashProvider";

jest.useFakeTimers();

describe("SplashProvider", () => {
  beforeEach(() => {
    sessionStorage.clear();
  });

  it("처음 방문시 SplashScreen 3초간 보인다", async () => {
    render(
      <SplashProvider>
        <div>메인</div>
      </SplashProvider>
    );

    expect(screen.queryByText("메인")).not.toBeInTheDocument();

    await act(async () => {
      jest.advanceTimersByTime(3000);
    });

    await waitFor(() => expect(screen.getByText("메인")).toBeInTheDocument());
  });

  it("이미 seenSplash가 있으면 바로 children 보여줌", () => {
    sessionStorage.setItem("seenSplash", "true");

    render(
      <SplashProvider>
        <div>메인</div>
      </SplashProvider>
    );

    expect(screen.getByText("메인")).toBeInTheDocument();
  });
});
